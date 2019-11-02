// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./index');
const chai = require('chai');
describe('Max Subset Sum (No Adj.)', () => {
  it('Test Case #1', function () {
    chai.expect(program.maxSubsetSumNoAdjacent([])).to.deep.equal(0);
  });

  it('Test Case #2', function () {
    chai.expect(program.maxSubsetSumNoAdjacent([1])).to.deep.equal(1);
  });

  it('Test Case #3', function () {
    chai.expect(program.maxSubsetSumNoAdjacent([1, 2])).to.deep.equal(2);
  });

  it('Test Case #4', function () {
    chai.expect(program.maxSubsetSumNoAdjacent([1, 2, 3])).to.deep.equal(4);
  });

  it('Test Case #5', function () {
    chai.expect(program.maxSubsetSumNoAdjacent([1, 15, 3])).to.deep.equal(15);
  });

  it('Test Case #6', function () {
    chai
      .expect(program.maxSubsetSumNoAdjacent([7, 10, 12, 7, 9, 14]))
      .to.deep.equal(33);
  });

  it('Test Case #7', function () {
    chai
      .expect(program.maxSubsetSumNoAdjacent([4, 3, 5, 200, 5, 3]))
      .to.deep.equal(207);
  });

  it('Test Case #8', function () {
    chai
      .expect(program.maxSubsetSumNoAdjacent([10, 5, 20, 25, 15, 5, 5, 15]))
      .to.deep.equal(60);
  });

  it('Test Case #9', function () {
    chai
      .expect(
        program.maxSubsetSumNoAdjacent([
          10,
          5,
          20,
          25,
          15,
          5,
          5,
          15,
          3,
          15,
          5,
          5,
          15,
        ]),
      )
      .to.deep.equal(90);
  });

  it('Test Case #10', function () {
    chai
      .expect(program.maxSubsetSumNoAdjacent([125, 210, 250, 120, 150, 300]))
      .to.deep.equal(675);
  });

  it('Test Case #11', function () {
    chai
      .expect(program.maxSubsetSumNoAdjacent([30, 25, 50, 55, 100]))
      .to.deep.equal(180);
  });

  it('Test Case #12', function () {
    chai
      .expect(program.maxSubsetSumNoAdjacent([30, 25, 50, 55, 100, 120]))
      .to.deep.equal(205);
  });

  it('Test Case #13', function () {
    chai
      .expect(
        program.maxSubsetSumNoAdjacent([7, 10, 12, 7, 9, 14, 15, 16, 25, 20, 4]),
      )
      .to.deep.equal(72);
  });

})
