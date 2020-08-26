/* eslint-env mocha */
const runAction = require('./helpers/run-action.js')
const chai = require('chai')
const { assert } = require('chai')
chai.should()

describe('action-phswap', function () {
  // ******* DO NOT REMOVE THIS TEST!
  require('./pre/tests.js')
  // *******
  describe('placeholder test', function () {
    this.timeout(30000)
    const steps = ['pre', 'main']
    const exp = true
    it('should process inputs', async function () {
      process.env.DUPLETS = '[placeholder]:[value]'
      await runAction(steps)
      assert(exp === true)
    })
    it('should warn that there is no inputs if none found', async function () {
      delete process.env.DUPLETS
      await runAction(steps)
      assert(exp === true)
    })
  })
})
