// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./index');
const chai = require('chai');
describe('Largest Three Numbers', () => {

  it('Test Case #1', function () {
    chai
      .expect(program.findThreeLargestNumbers([55, 7, 8]))
      .to.deep.equal([7, 8, 55]);
  });

  it('Test Case #2', function () {
    chai
      .expect(program.findThreeLargestNumbers([55, 43, 11, 3, -3, 10]))
      .to.deep.equal([11, 43, 55]);
  });

  it('Test Case #3', function () {
    chai
      .expect(program.findThreeLargestNumbers([7, 8, 3, 11, 43, 55]))
      .to.deep.equal([11, 43, 55]);
  });

  it('Test Case #4', function () {
    chai
      .expect(program.findThreeLargestNumbers([55, 7, 8, 3, 43, 11]))
      .to.deep.equal([11, 43, 55]);
  });

  it('Test Case #5', function () {
    chai
      .expect(program.findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]))
      .to.deep.equal([7, 7, 7]);
  });

  it('Test Case #6', function () {
    chai
      .expect(program.findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7]))
      .to.deep.equal([7, 7, 8]);
  });

  it('Test Case #7', function () {
    chai
      .expect(
        program.findThreeLargestNumbers([
          141,
          1,
          17,
          -7,
          -17,
          -27,
          18,
          541,
          8,
          7,
          7,
        ]),
      )
      .to.deep.equal([18, 141, 541]);
  });

  it('Test Case #8', function () {
    chai
      .expect(
        program.findThreeLargestNumbers([
          -1,
          -2,
          -3,
          -7,
          -17,
          -27,
          -18,
          -541,
          -8,
          -7,
          7,
        ]),
      )
      .to.deep.equal([-2, -1, 7]);
  });

})
