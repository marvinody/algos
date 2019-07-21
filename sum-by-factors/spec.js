const { expect } = require('chai')
const { describe, it } = require('mocha')
const { sumOfDivided, primeFactors } = require('./index')

const makeTestCase = (params, expected, fn) => ({
  params,
  actual: fn.apply(null, params),
  expected
})

describe('Sum by factors', () => {

  it('should work for provided test cases', () => {
    const testCases = [
      // nested array cause sumOfDiv expects first arg to be arr
      makeTestCase([[12, 15]], [[2, 12], [3, 27], [5, 15]], sumOfDivided),
      makeTestCase([[15, 21, 24, 30, 45]], [[2, 54], [3, 135], [5, 90], [7, 21]], sumOfDivided),
    ]
    testCases.forEach(test => {
      expect(test.actual).to.deep.equal(test.expected);
    })
  })

  describe('primeFactors', () => {
    it('should return prime factors for numbers', () => {
      const testCases = [
        makeTestCase([4], [2], primeFactors),
        makeTestCase([2], [2], primeFactors),
        makeTestCase([12], [2, 3], primeFactors),
        makeTestCase([15], [3, 5], primeFactors),
        makeTestCase([64], [2], primeFactors),
        makeTestCase([81], [3], primeFactors),
      ]
      testCases.forEach(test => {
        expect(test.actual).to.deep.equal(test.expected);
      })
    })
  })
})
