// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./index');
const chai = require('chai');
describe('Balanced Brackets', () => {

  it('Test Case #1', function () {
    chai.expect(program.balancedBrackets('()[]{}{')).to.deep.equal(false);
  });

  it('Test Case #2', function () {
    chai
      .expect(program.balancedBrackets('(((((({{{{{[[[[[([)])]]]]]}}}}}))))))'))
      .to.deep.equal(false);
  });

  it('Test Case #3', function () {
    chai.expect(program.balancedBrackets('()()[{()})]')).to.deep.equal(false);
  });

  it('Test Case #4', function () {
    chai.expect(program.balancedBrackets('(()())((()()()))')).to.deep.equal(true);
  });

  it('Test Case #5', function () {
    chai.expect(program.balancedBrackets('{}()')).to.deep.equal(true);
  });

  it('Test Case #6', function () {
    chai.expect(program.balancedBrackets('()([])')).to.deep.equal(true);
  });

  it('Test Case #7', function () {
    chai.expect(program.balancedBrackets('((){{{{[]}}}})')).to.deep.equal(true);
  });

  it('Test Case #8', function () {
    chai.expect(program.balancedBrackets('([])(){}(())()()')).to.deep.equal(true);
  });

  it('Test Case #9', function () {
    chai.expect(program.balancedBrackets('((({})()))')).to.deep.equal(true);
  });

  it('Test Case #10', function () {
    chai.expect(program.balancedBrackets('(([]()()){})')).to.deep.equal(true);
  });

  it('Test Case #11', function () {
    chai
      .expect(
        program.balancedBrackets(
          '(((((([[[[[[{{{{{{{{{{{{()}}}}}}}}}}}}]]]]]]))))))((([])({})[])[])[]([]){}(())',
        ),
      )
      .to.deep.equal(true);
  });

  it('Test Case #12', function () {
    chai
      .expect(program.balancedBrackets('{[[[[({(}))]]]]}'))
      .to.deep.equal(false);
  });

  it('Test Case #13', function () {
    chai
      .expect(program.balancedBrackets('[((([])([]){}){}){}([])[]((())'))
      .to.deep.equal(false);
  });

  it('Test Case #14', function () {
    chai.expect(program.balancedBrackets(')[]}')).to.deep.equal(false);
  });

})
