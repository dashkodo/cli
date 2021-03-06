# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="7.4.11"></a>
## [7.4.11](https://github.com/heroku/cli/compare/v7.4.10...v7.4.11) (2018-06-21)




**Note:** Version bump only for package @heroku-cli/plugin-ci-v5

<a name="7.4.8"></a>
## [7.4.8](https://github.com/heroku/cli/compare/v7.4.7...v7.4.8) (2018-06-21)




**Note:** Version bump only for package @heroku-cli/plugin-ci-v5

<a name="7.4.6"></a>
## [7.4.6](https://github.com/heroku/cli/compare/v7.4.5...v7.4.6) (2018-06-20)


### Bug Fixes

* update dev-cli readme generation ([42a77bc](https://github.com/heroku/cli/commit/42a77bc))




<a name="7.4.5"></a>
## [7.4.5](https://github.com/heroku/cli/compare/v7.4.4...v7.4.5) (2018-06-20)


### Bug Fixes

* updated monorepo documentation urls ([4bb6fe0](https://github.com/heroku/cli/commit/4bb6fe0))




<a name="7.4.0"></a>
# [7.4.0](https://github.com/heroku/cli/compare/v7.3.0...v7.4.0) (2018-06-19)


### Bug Fixes

* repo name ([c306c78](https://github.com/heroku/cli/commit/c306c78))




Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased

## [1.9.12] - 2018-05-10
### Changed

- Improve git-related error messages
- Updated dependencies

## [1.9.9] - 2018-04-18
### Changed

- Use @heroku-cli/command for completions

## [1.9.8] - 2018-03-07
### Fix

- Fix package.json for oclif

## [1.9.7] - 2018-03-07
### Changed

- Move plugin topics to package.json

## [1.9.6] - 2018-03-07
### Changed

- Update plugin to be compatible with oclif

## [1.9.5] - 2017-08-08
### Added

- Command `heroku ci` && `heroku ci:list` can display JSON via the  `--json` flag. ([#57](https://github.com/heroku/heroku-ci/pull/57))

## [1.9.4] - 2017-08-04
### Changed

- `heroku ci:debug` no longer passes environment to the dyno, that happens by the backend services. ([#58](https://github.com/heroku/heroku-ci/pull/58))

## [1.9.3] - 2017-08-02

- Command `heroku ci` && `heroku ci:list` accept pipeline name via the  `--pipelines` flag.

## [1.9.2] - 2017-07-21
### Changed
- Use upstream version of CLI plugin `heroku-run`, which is used to streamify from the  the dyno.
- Remove code that was used as intermediate fallback while we transitioned over in one of our backend services.

## [1.9.1] - 2017-07-11
### Fixed
- Fixed a bug introduced in 1.9.0 with attaching to an already started one off dyno

## [1.9.0] - 2017-07-07
### Changed
- Changed the debug run implementation to allow for the server to configure the run

## [1.8.0] - 2017-06-02
### Fixed
- Debug runs now include the same Heroku provided config as regular test runs (`HEROKU_TEST_RUN_ID`, `HEROKU_TEST_RUN_BRANCH` `CI_NODE_INDEX` and `CI_NODE_TOTAL`)

## [1.5.2] - 2017-04-27
### Changed
- Releax engines requirements in package.json.

## [1.5.1] - 2017-04-03
### Changed
- Test output is now read from the `/test-runs/:id/test-nodes` sub-resource.

## [1.4.2] - 2017-03-20
### Fixed
- Fixes a null traversal regression in `ci:debug`. ([#25](https://github.com/heroku/heroku-ci/pull/25))

## [1.4.1] - 2017-03-17
### Fixed
- Commands which require a git repo to be present now fail with a helpful error. ([#24](https://github.com/heroku/heroku-ci/pull/24))
