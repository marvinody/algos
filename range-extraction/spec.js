const { expect } = require('chai')
const { describe, it } = require('mocha')
const { range } = require('./index')

const makeTestCase = (params, expected, fn) => ({
  params,
  actual: fn.apply(null, params),
  expected
})

describe('Range extraction', () => {

  it('should work for provided test cases', () => {
    const testCases = [
      // nested array cause sumOfDiv expects first arg to be arr
      makeTestCase([[-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]], '-6,-3-1,3-5,7-11,14,15,17-20', range),
    ]
    testCases.forEach(test => {
      expect(test.actual).to.deep.equal(test.expected);
    })
  })
})
