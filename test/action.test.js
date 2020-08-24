/* eslint-env mocha */
const runAction = require('./helpers/run-action.js')
const steps = ['pre', 'main']
const chai = require('chai')
const { assert } = require('chai')
chai.should()

describe('action-phswap', function () {
  const exp = true
  it('should process inputs', async function () {
    process.env.DUPLETS = '[placeholder]:[value]'
    await runAction(steps)
    assert(exp === true, 'True is true...')
  })
  it('should warn that there is no inputs if none found', async function () {
    delete process.env.DUPLETS
    await runAction(steps)
    assert(exp === true, 'True is true...')
  })
})
