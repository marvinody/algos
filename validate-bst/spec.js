// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require("./index");
const chai = require("chai");

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }
}

const test1 = new BST(10).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22)
  .insert(13).insert(14);

const test2 = new BST(10).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22)
  .insert(-5).insert(-15).insert(-5).insert(-2).insert(-1).insert(-22);

const test3 = new BST(10);

const test4 = new BST(10).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22)
  .insert(500).insert(1500).insert(50).insert(200).insert(10000).insert(2200);

const test5 = new BST(5000).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22)
  .insert(1).insert(1).insert(3).insert(1).insert(1).insert(502).insert(55000)
  .insert(204).insert(205).insert(207).insert(206).insert(208).insert(203);

const test6 = new BST(10).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22);
test6.left.right.right = new BST(11);

const test7 = new BST(10).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22)
  .insert(-5).insert(-15).insert(-5).insert(-2).insert(-1).insert(-22);
test7.left.left.left.left.left.left.left = new BST(11);

const test8 = new BST(10).insert(12);
test8.left = new BST(11);

const test9 = new BST(10).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22)
  .insert(500).insert(1500).insert(50).insert(200).insert(10000).insert(2200);
test9.right.right.right.right.right.right = new BST(9999);

const test10 = new BST(100).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22)
  .insert(1).insert(1).insert(3).insert(1).insert(1).insert(502).insert(55000)
  .insert(204).insert(205).insert(207).insert(206).insert(208).insert(203);
test10.right.left.right.left = new BST(300);

const test11 = new BST(10).insert(5).insert(15);
test11.left.right = new BST(10);
describe('Validate BST', () => {
  it('Test Case #1', function () {
    chai.expect(program.validateBst(test1)).to.deep.equal(true);
  });

  it('Test Case #2', function () {
    chai.expect(program.validateBst(test2)).to.deep.equal(true);
  });

  it('Test Case #3', function () {
    chai.expect(program.validateBst(test3)).to.deep.equal(true);
  });

  it('Test Case #4', function () {
    chai.expect(program.validateBst(test4)).to.deep.equal(true);
  });

  it('Test Case #5', function () {
    chai.expect(program.validateBst(test5)).to.deep.equal(true);
  });

  it('Test Case #6', function () {
    chai.expect(program.validateBst(test6)).to.deep.equal(false);
  });

  it('Test Case #7', function () {
    chai.expect(program.validateBst(test7)).to.deep.equal(false);
  });

  it('Test Case #8', function () {
    chai.expect(program.validateBst(test8)).to.deep.equal(false);
  });

  it('Test Case #9', function () {
    chai.expect(program.validateBst(test9)).to.deep.equal(false);
  });

  it('Test Case #10', function () {
    chai.expect(program.validateBst(test10)).to.deep.equal(false);
  });

  it('Test Case #11', function () {
    chai.expect(program.validateBst(test11)).to.deep.equal(false);
  });

})
