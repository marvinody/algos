// Add, edit, or remove tests in this file.
// Treat it as your playground!

const program = require('./index');
const chai = require('chai');
describe('Remove Kth Node From End', () => {

  class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }

    addMany(values) {
      let current = this;
      while (current.next !== null) {
        current = current.next;
      }
      for (const value of values) {
        current.next = new LinkedList(value);
        current = current.next;
      }
      return this;
    }

    getNodesInArray() {
      const nodes = [];
      let current = this;
      while (current !== null) {
        nodes.push(current.value);
        current = current.next;
      }
      return nodes;
    }
  }

  const test1 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const result1 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8]);

  const test2 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const result2 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 9]);

  const test3 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const result3 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 8, 9]);

  const test4 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const result4 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 7, 8, 9]);

  const test5 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const result5 = new LinkedList(0).addMany([1, 2, 3, 4, 6, 7, 8, 9]);

  const test6 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const result6 = new LinkedList(0).addMany([1, 2, 3, 5, 6, 7, 8, 9]);

  const test7 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const result7 = new LinkedList(0).addMany([1, 2, 4, 5, 6, 7, 8, 9]);

  const test8 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const result8 = new LinkedList(0).addMany([1, 3, 4, 5, 6, 7, 8, 9]);

  const test9 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const result9 = new LinkedList(0).addMany([2, 3, 4, 5, 6, 7, 8, 9]);

  const test10 = new LinkedList(0).addMany([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const result10 = new LinkedList(1).addMany([2, 3, 4, 5, 6, 7, 8, 9]);

  it('Test Case #1', function () {
    program.removeKthNodeFromEnd(test1, 1);
    chai.expect(test1.getNodesInArray()).to.deep.equal(result1.getNodesInArray());
  });

  it('Test Case #2', function () {
    program.removeKthNodeFromEnd(test2, 2);
    chai.expect(test2.getNodesInArray()).to.deep.equal(result2.getNodesInArray());
  });

  it('Test Case #3', function () {
    program.removeKthNodeFromEnd(test3, 3);
    chai.expect(test3.getNodesInArray()).to.deep.equal(result3.getNodesInArray());
  });

  it('Test Case #4', function () {
    program.removeKthNodeFromEnd(test4, 4);
    chai.expect(test4.getNodesInArray()).to.deep.equal(result4.getNodesInArray());
  });

  it('Test Case #5', function () {
    program.removeKthNodeFromEnd(test5, 5);
    chai.expect(test5.getNodesInArray()).to.deep.equal(result5.getNodesInArray());
  });

  it('Test Case #6', function () {
    program.removeKthNodeFromEnd(test6, 6);
    chai.expect(test6.getNodesInArray()).to.deep.equal(result6.getNodesInArray());
  });

  it('Test Case #7', function () {
    program.removeKthNodeFromEnd(test7, 7);
    chai.expect(test7.getNodesInArray()).to.deep.equal(result7.getNodesInArray());
  });

  it('Test Case #8', function () {
    program.removeKthNodeFromEnd(test8, 8);
    chai.expect(test8.getNodesInArray()).to.deep.equal(result8.getNodesInArray());
  });

  it('Test Case #9', function () {
    program.removeKthNodeFromEnd(test9, 9);
    chai.expect(test9.getNodesInArray()).to.deep.equal(result9.getNodesInArray());
  });

  it('Test Case #10', function () {
    program.removeKthNodeFromEnd(test10, 10);
    chai
      .expect(test10.getNodesInArray())
      .to.deep.equal(result10.getNodesInArray());
  });

})
