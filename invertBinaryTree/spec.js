// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require("./index");
const chai = require("chai");

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }

  invertedInsert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left)
    }
    this.invertedInsert(values, i + 1);
    return this;
  }
}

const test1 = new BinaryTree(1);
const invertedTest1 = new BinaryTree(1);

const test2 = new BinaryTree(1).insert([2]);
const invertedTest2 = new BinaryTree(1).invertedInsert([2]);

const test3 = new BinaryTree(1).insert([2, 3]);
const invertedTest3 = new BinaryTree(1).invertedInsert([2, 3]);

const test4 = new BinaryTree(1).insert([2, 3, 4]);
const invertedTest4 = new BinaryTree(1).invertedInsert([2, 3, 4]);

const test5 = new BinaryTree(1).insert([2, 3, 4, 5]);
const invertedTest5 = new BinaryTree(1).invertedInsert([2, 3, 4, 5]);

const test6 = new BinaryTree(1).insert([2, 3, 4, 5, 6]);
const invertedTest6 = new BinaryTree(1).invertedInsert([2, 3, 4, 5, 6]);

const test7 = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7]);
const invertedTest7 = new BinaryTree(1).invertedInsert([2, 3, 4, 5, 6, 7]);

const test8 = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8]);
const invertedTest8 = new BinaryTree(1).invertedInsert([2, 3, 4, 5, 6, 7, 8]);

const test9 = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9]);
const invertedTest9 = new BinaryTree(1).invertedInsert([2, 3, 4, 5, 6, 7, 8, 9]);

const test10 = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
const invertedTest10 = new BinaryTree(1).invertedInsert([2, 3, 4, 5, 6, 7, 8, 9, 10]);

const test11 = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
const invertedTest11 = new BinaryTree(1).invertedInsert([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
describe('Invert Binary Tree', () => {

  it('Test Case #1', function () {
    program.invertBinaryTree(test1);
    chai.expect(test1).to.deep.equal(invertedTest1);
  });

  it('Test Case #2', function () {
    program.invertBinaryTree(test2);
    chai.expect(test2).to.deep.equal(invertedTest2);
  });

  it('Test Case #3', function () {
    program.invertBinaryTree(test3);
    chai.expect(test3).to.deep.equal(invertedTest3);
  });

  it('Test Case #4', function () {
    program.invertBinaryTree(test4);
    chai.expect(test4).to.deep.equal(invertedTest4);
  });

  it('Test Case #5', function () {
    program.invertBinaryTree(test5);
    chai.expect(test5).to.deep.equal(invertedTest5);
  });

  it('Test Case #6', function () {
    program.invertBinaryTree(test6);
    chai.expect(test6).to.deep.equal(invertedTest6);
  });

  it('Test Case #7', function () {
    program.invertBinaryTree(test7);
    chai.expect(test7).to.deep.equal(invertedTest7);
  });

  it('Test Case #8', function () {
    program.invertBinaryTree(test8);
    chai.expect(test8).to.deep.equal(invertedTest8);
  });

  it('Test Case #9', function () {
    program.invertBinaryTree(test9);
    chai.expect(test9).to.deep.equal(invertedTest9);
  });

  it('Test Case #10', function () {
    program.invertBinaryTree(test10);
    chai.expect(test10).to.deep.equal(invertedTest10);
  });

  it('Test Case #11', function () {
    program.invertBinaryTree(test11);
    chai.expect(test11).to.deep.equal(invertedTest11);
  });

})
