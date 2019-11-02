// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require("./index");
const chai = require("chai");
describe.only('Number of Ways to Make Change', () => {

  it('Test Case #1', function () {
    chai.expect(program.numberOfWaysToMakeChange(0, [2, 3, 4, 7])).to.deep.equal(1);
  });

  it('Test Case #2', function () {
    chai.expect(program.numberOfWaysToMakeChange(9, [5])).to.deep.equal(0);
  });

  it('Test Case #3', function () {
    chai.expect(program.numberOfWaysToMakeChange(7, [2, 4])).to.deep.equal(0);
  });

  it('Test Case #4', function () {
    chai.expect(program.numberOfWaysToMakeChange(6, [1, 5])).to.deep.equal(2);
  });

  it('Test Case #5', function () {
    chai.expect(program.numberOfWaysToMakeChange(4, [1, 5, 10, 25])).to.deep.equal(1);
  });

  it('Test Case #6', function () {
    chai.expect(program.numberOfWaysToMakeChange(5, [1, 5, 10, 25])).to.deep.equal(2);
  });

  it('Test Case #7', function () {
    chai.expect(program.numberOfWaysToMakeChange(10, [1, 5, 10, 25])).to.deep.equal(4);
  });

  it('Test Case #8', function () {
    chai.expect(program.numberOfWaysToMakeChange(25, [1, 5, 10, 25])).to.deep.equal(13);
  });

  it('Test Case #9', function () {
    chai.expect(program.numberOfWaysToMakeChange(12, [2, 3, 7])).to.deep.equal(4);
  });

  it('Test Case #10', function () {
    chai.expect(program.numberOfWaysToMakeChange(7, [2, 3, 4, 7])).to.deep.equal(3);
  });


})
