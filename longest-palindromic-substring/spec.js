// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./index');
const chai = require('chai');
describe('Longest Palindromic Substring', () => {

  it('Test Case #1', function () {
    chai.expect(program.longestPalindromicSubstring('a')).to.deep.equal('a');
  });

  it('Test Case #2', function () {
    chai
      .expect(program.longestPalindromicSubstring("it's highnoon"))
      .to.deep.equal('noon');
  });

  it('Test Case #3', function () {
    chai
      .expect(program.longestPalindromicSubstring('noon high it is'))
      .to.deep.equal('noon');
  });

  it('Test Case #4', function () {
    chai
      .expect(program.longestPalindromicSubstring("abccbait's highnoon"))
      .to.deep.equal('abccba');
  });

  it('Test Case #5', function () {
    chai
      .expect(program.longestPalindromicSubstring('abaxyzzyxf'))
      .to.deep.equal('xyzzyx');
  });

  it('Test Case #6', function () {
    chai
      .expect(
        program.longestPalindromicSubstring('abcdefgfedcbazzzzzzzzzzzzzzzzzzzz'),
      )
      .to.deep.equal('zzzzzzzzzzzzzzzzzzzz');
  });

  it('Test Case #7', function () {
    chai
      .expect(program.longestPalindromicSubstring('abcdefgfedcba'))
      .to.deep.equal('abcdefgfedcba');
  });

  it('Test Case #8', function () {
    chai
      .expect(program.longestPalindromicSubstring('abcdefghfedcbaa'))
      .to.deep.equal('aa');
  });

  it('Test Case #9', function () {
    chai
      .expect(program.longestPalindromicSubstring('abcdefggfedcba'))
      .to.deep.equal('abcdefggfedcba');
  });

  it('Test Case #10', function () {
    chai
      .expect(
        program.longestPalindromicSubstring('zzzzzzz2345abbbba5432zzbbababa'),
      )
      .to.deep.equal('zz2345abbbba5432zz');
  });

  it('Test Case #11', function () {
    chai
      .expect(program.longestPalindromicSubstring('z234a5abbbba54a32z'))
      .to.deep.equal('5abbbba5');
  });

  it('Test Case #12', function () {
    chai
      .expect(program.longestPalindromicSubstring('z234a5abbba54a32z'))
      .to.deep.equal('5abbba5');
  });

})
