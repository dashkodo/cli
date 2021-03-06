'use strict'

const cli = require('heroku-cli-util')

module.exports = function () {
  function CIDR (cidr) {
    if (!cidr || cidr.length === 0) return ''
    return cidr.join(', ')
  }

  function CIDRBlocksOrCIDRBlock (cidrBlocks, row) {
    if (!cidrBlocks || cidrBlocks.length === 0) return row.cidr_block
    return CIDR(cidrBlocks)
  }

  function Status (s) {
    var colored = s
    switch (s) {
      case 'active':
        colored = `${cli.color.green(colored)}`
        break
      case 'pending-acceptance':
      case 'provisioning':
        colored = `${cli.color.yellow(colored)}`
        break
      case 'expired':
      case 'failed':
      case 'deleted':
      case 'rejected':
        colored = `${cli.color.red(colored)}`
        break
    }

    return colored
  }

  return {
    CIDR,
    CIDRBlocksOrCIDRBlock,
    Status
  }
}
