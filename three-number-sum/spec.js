// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./index');
const chai = require('chai');
describe('Three Number Sum', () => {

  it('Test Case #1', function () {
    chai.expect(program.threeNumberSum([1, 2, 3], 6)).to.deep.equal([[1, 2, 3]]);
  });

  it('Test Case #2', function () {
    chai.expect(program.threeNumberSum([1, 2, 3], 7)).to.deep.equal([]);
  });

  it('Test Case #3', function () {
    chai
      .expect(program.threeNumberSum([8, 10, -2, 49, 14], 57))
      .to.deep.equal([[-2, 10, 49]]);
  });

  it('Test Case #4', function () {
    chai
      .expect(program.threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
      .to.deep.equal([[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]);
  });

  it('Test Case #5', function () {
    chai
      .expect(program.threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0))
      .to.deep.equal([[-8, 3, 5], [-6, 1, 5], [-1, 0, 1]]);
  });

  it('Test Case #6', function () {
    chai
      .expect(program.threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6], 0))
      .to.deep.equal([
        [-8, 2, 6],
        [-8, 3, 5],
        [-6, 0, 6],
        [-6, 1, 5],
        [-1, 0, 1],
      ]);
  });

  it('Test Case #7', function () {
    chai
      .expect(program.threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], 0))
      .to.deep.equal([
        [-8, 2, 6],
        [-8, 3, 5],
        [-6, 0, 6],
        [-6, 1, 5],
        [-5, -1, 6],
        [-5, 0, 5],
        [-5, 2, 3],
        [-1, 0, 1],
      ]);
  });

  it('Test Case #8', function () {
    chai
      .expect(program.threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18))
      .to.deep.equal([
        [1, 2, 15],
        [1, 8, 9],
        [2, 7, 9],
        [3, 6, 9],
        [3, 7, 8],
        [4, 5, 9],
        [4, 6, 8],
        [5, 6, 7],
      ]);
  });

  it('Test Case #9', function () {
    chai
      .expect(program.threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 32))
      .to.deep.equal([[8, 9, 15]]);
  });

  it('Test Case #10', function () {
    chai
      .expect(program.threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 33))
      .to.deep.equal([]);
  });

  it('Test Case #11', function () {
    chai
      .expect(program.threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 5))
      .to.deep.equal([]);
  });

})
