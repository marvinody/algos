// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./index');
const chai = require('chai');
describe('River Sizes', () => {

  it('Test Case #1', function () {
    const testInput = [[0]];
    const expected = [];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it('Test Case #2', function () {
    const testInput = [[1]];
    const expected = [1];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it('Test Case #3', function () {
    const testInput = [[1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0]];
    const expected = [1, 2, 3];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it('Test Case #4', function () {
    const testInput = [[1, 0, 0, 1], [1, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 0]];
    const expected = [1, 1, 2, 3];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it('Test Case #5', function () {
    const testInput = [
      [1, 0, 0, 1, 0],
      [1, 0, 1, 0, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0],
    ];
    const expected = [1, 2, 2, 2, 5];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it('Test Case #6', function () {
    const testInput = [
      [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
      [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
      [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
      [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
      [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    ];
    const expected = [1, 1, 2, 2, 5, 21];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it('Test Case #7', function () {
    const testInput = [
      [1, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 1],
    ];
    const expected = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it('Test Case #8', function () {
    const testInput = [
      [1, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 1],
    ];
    const expected = [1, 1, 1, 1, 1, 1, 1, 1, 7];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it('Test Case #9', function () {
    const testInput = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    const expected = [];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it('Test Case #10', function () {
    const testInput = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ];
    const expected = [49];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it('Test Case #11', function () {
    const testInput = [
      [1, 1, 0, 0, 0, 0, 1, 1],
      [1, 0, 1, 1, 1, 1, 0, 1],
      [0, 1, 1, 0, 0, 0, 1, 1],
    ];
    const expected = [3, 5, 6];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it('Test Case #12', function () {
    const testInput = [
      [1, 1, 0],
      [1, 0, 1],
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
      [1, 0, 0],
      [0, 0, 0],
      [1, 0, 0],
      [1, 0, 1],
      [1, 1, 1],
    ];
    const expected = [1, 1, 2, 6, 10];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

})
