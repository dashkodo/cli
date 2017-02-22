const cli = require('heroku-cli-util')
const co = require('co')
const api = require('../../lib/heroku-api')
const git = require('../../lib/git')
const source = require('../../lib/source')
const TestRun = require('../../lib/test-run')

function* run (context, heroku) {
  const coupling = yield api.pipelineCoupling(heroku, context.app)
  const pipeline = coupling.pipeline

  const commit = yield git.readCommit('HEAD')
  const sourceBlobUrl = yield cli.action('Preparing source', co(function* () {
    return yield source.createSourceBlob(commit.ref, context, heroku)
  }))

  const pipelineRepository = yield api.pipelineRepository(heroku, pipeline.id)
  const organization = pipelineRepository.organization &&
                       pipelineRepository.organization.name

  const testRun = yield cli.action('Starting test run', co(function* () {
    return yield api.createTestRun(heroku, {
      commit_branch: commit.branch,
      commit_message: commit.message,
      commit_sha: commit.ref,
      pipeline: pipeline.id,
      organization,
      source_blob_url: sourceBlobUrl
    })
  }))

  return yield TestRun.displayAndExit(pipeline, testRun.number, { heroku })
}

module.exports = {
  topic: 'ci',
  command: 'run',
  needsApp: true,
  needsAuth: true,
  description: 'run tests against current directory',
  help: 'uploads the contents of the current directory to Heroku and runs the tests',
  run: cli.command(co.wrap(run))
}
