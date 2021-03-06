// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require("./index");
const chai = require("chai");
describe('Smallest Difference', () => {

  it('Test Case #1', function () {
    chai.expect(program.smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17])).to.deep.equal([20, 17]);
  });

  it('Test Case #2', function () {
    chai.expect(program.smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])).to.deep.equal([28, 26]);
  });

  it('Test Case #3', function () {
    chai.expect(program.smallestDifference([10, 0, 20, 25], [1005, 1006, 1014, 1032, 1031])).to.deep.equal([25, 1005]);
  });

  it('Test Case #4', function () {
    chai.expect(program.smallestDifference([10, 0, 20, 25, 2200], [1005, 1006, 1014, 1032, 1031])).to.deep.equal([25, 1005]);
  });

  it('Test Case #5', function () {
    chai.expect(program.smallestDifference([10, 0, 20, 25, 2000], [1005, 1006, 1014, 1032, 1031])).to.deep.equal([2000, 1032]);
  });

  it('Test Case #6', function () {
    chai.expect(program.smallestDifference([240, 124, 86, 111, 2, 84, 954, 27, 89], [1, 3, 954, 19, 8])).to.deep.equal([954, 954]);
  });

  it('Test Case #7', function () {
    chai.expect(program.smallestDifference([0, 20], [21, -2])).to.deep.equal([20, 21]);
  });

  it('Test Case #8', function () {
    chai.expect(program.smallestDifference([10, 1000], [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530])).to.deep.equal([1000, 1014]);
  });

  it('Test Case #9', function () {
    chai.expect(program.smallestDifference([10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123], [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530])).to.deep.equal([-123, -124]);
  });

  it('Test Case #10', function () {
    chai.expect(program.smallestDifference([10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530], [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530])).to.deep.equal([530, 530]);
  });



})
