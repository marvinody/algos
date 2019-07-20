const { expect } = require('chai')
const { describe, it } = require('mocha')
const { encode, decode, shiftChar } = require('./index')

const makeTestCase = (params, expected, fn) => ({
  params,
  actual: fn.apply(null, params),
  expected
})


describe('Caesar Cipher Variation 2', () => {
  it('should  work for provided test cases', () => {
    const testCases = [
      makeTestCase(
        [['ijJ tipvme ibw', 'f lopxo uibu z', 'pv xpvme ibwf ', 'b qfsgfdu botx', 'fs gps nf!!!']],
        'I should have known that you would have a perfect answer for me!!!',
        decode
      ), makeTestCase(
        ['O CAPTAIN! my Captain! our fearful trip is done;', 1],
        ['opP DBQUBJ', 'O! nz Dbqu', 'bjo! pvs g', 'fbsgvm usj', 'q jt epof;'],
        encode
      )
    ]
    testCases.forEach(test => {
      expect(test.actual).to.deep.equal(test.expected);
    })
  })

  describe('shiftChar', () => {
    it('should rotate chars with positive shift', () => {
      const testCases = [
        makeTestCase(['a', 1], 'b', shiftChar),
        makeTestCase(['a', 2], 'c', shiftChar),
        makeTestCase(['z', 1], 'a', shiftChar),
        makeTestCase(['A', 1], 'B', shiftChar),
        makeTestCase(['A', 2], 'C', shiftChar),
        makeTestCase(['Z', 1], 'A', shiftChar),
      ]
      testCases.forEach(test => {
        expect(test.actual).to.deep.equal(test.expected);
      })
    })

    it('should rotate chars with negative shift', () => {
      const testCases = [
        makeTestCase(['b', -1], 'a', shiftChar),
        makeTestCase(['c', -2], 'a', shiftChar),
        makeTestCase(['a', -1], 'z', shiftChar),
        makeTestCase(['B', -1], 'A', shiftChar),
        makeTestCase(['C', -2], 'A', shiftChar),
        makeTestCase(['A', -1], 'Z', shiftChar),
      ]
      testCases.forEach(test => {
        expect(test.actual).to.deep.equal(test.expected);
      })
    })
  })
})
