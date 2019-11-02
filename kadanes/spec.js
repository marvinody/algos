// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require("./index");
const chai = require("chai");
describe('Kadane\'s Algorithm', () => {

  it('Test Case #1', function () {
    chai.expect(program.kadanesAlgorithm([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.deep.equal(55);
  });

  it('Test Case #2', function () {
    chai.expect(program.kadanesAlgorithm([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10])).to.deep.equal(-1);
  });

  it('Test Case #3', function () {
    chai.expect(program.kadanesAlgorithm([-10, -2, -9, -4, -8, -6, -7, -1, -3, -5])).to.deep.equal(-1);
  });

  it('Test Case #4', function () {
    chai.expect(program.kadanesAlgorithm([1, 2, 3, 4, 5, 6, -20, 7, 8, 9, 10])).to.deep.equal(35);
  });

  it('Test Case #5', function () {
    chai.expect(program.kadanesAlgorithm([1, 2, 3, 4, 5, 6, -22, 7, 8, 9, 10])).to.deep.equal(34);
  });

  it('Test Case #6', function () {
    chai.expect(program.kadanesAlgorithm([1, 2, -4, 3, 5, -9, 8, 1, 2])).to.deep.equal(11);
  });

  it('Test Case #7', function () {
    chai.expect(program.kadanesAlgorithm([3, 4, -6, 7, 8])).to.deep.equal(16);
  });

  it('Test Case #8', function () {
    chai.expect(program.kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])).to.deep.equal(19);
  });

  it('Test Case #9', function () {
    chai.expect(program.kadanesAlgorithm([8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])).to.deep.equal(23);
  });

  it('Test Case #10', function () {
    chai.expect(program.kadanesAlgorithm([8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 6])).to.deep.equal(24);
  });

  it('Test Case #11', function () {
    chai.expect(program.kadanesAlgorithm([8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6])).to.deep.equal(22);
  });

  it('Test Case #12', function () {
    chai.expect(program.kadanesAlgorithm([8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6, 20, -23, 15, 1, -3, 4])).to.deep.equal(35);
  });

  it('Test Case #13', function () {
    chai.expect(program.kadanesAlgorithm([100, 8, 5, -9, 1, 3, -2, 3, 4, 7, 2, -18, 6, 3, 1, -5, 6, 20, -23, 15, 1, -3, 4])).to.deep.equal(135);
  });


})
