// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./index');
const chai = require('chai');
describe('Powerset', () => {

  function sortAndStringify(array) {
    return array.sort((a, b) => a - b).join(',');
  }

  it('Test Case #1', function () {
    const output = program.powerset([]).map(sortAndStringify);
    chai.expect(output.length === 1).to.be.true;
    chai.expect(output).to.include('');
  });

  it('Test Case #2', function () {
    const output = program.powerset([1]).map(sortAndStringify);
    chai.expect(output.length === 2).to.be.true;
    chai.expect(output).to.include('');
    chai.expect(output).to.include('1');
  });

  it('Test Case #3', function () {
    const output = program.powerset([1, 2]).map(sortAndStringify);
    chai.expect(output.length === 4).to.be.true;
    chai.expect(output).to.include('');
    chai.expect(output).to.include('1');
    chai.expect(output).to.include('2');
    chai.expect(output).to.include('1,2');
  });

  it('Test Case #4', function () {
    const output = program.powerset([1, 2, 3]).map(sortAndStringify);
    chai.expect(output.length === 8).to.be.true;
    chai.expect(output).to.include('');
    chai.expect(output).to.include('1');
    chai.expect(output).to.include('2');
    chai.expect(output).to.include('1,2');
    chai.expect(output).to.include('3');
    chai.expect(output).to.include('1,3');
    chai.expect(output).to.include('2,3');
    chai.expect(output).to.include('1,2,3');
  });

  it('Test Case #5', function () {
    const output = program.powerset([1, 2, 3, 4]).map(sortAndStringify);
    chai.expect(output.length === 16).to.be.true;
    chai.expect(output).to.include('');
    chai.expect(output).to.include('1');
    chai.expect(output).to.include('2');
    chai.expect(output).to.include('1,2');
    chai.expect(output).to.include('3');
    chai.expect(output).to.include('1,3');
    chai.expect(output).to.include('2,3');
    chai.expect(output).to.include('1,2,3');
    chai.expect(output).to.include('4');
    chai.expect(output).to.include('1,4');
    chai.expect(output).to.include('2,4');
    chai.expect(output).to.include('1,2,4');
    chai.expect(output).to.include('3,4');
    chai.expect(output).to.include('1,3,4');
    chai.expect(output).to.include('2,3,4');
    chai.expect(output).to.include('1,2,3,4');
  });

})
