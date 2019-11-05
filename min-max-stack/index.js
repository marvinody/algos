// Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor() {
    this.stack = []
    this.min = []
    this.max = []
  }
  peek() {
    return this.stack.length && this.stack[this.stack.length - 1]
  }

  pop() {
    const number = this.stack.pop()
    if (number === this.getMin()) {
      this.min.pop()
    }
    if (number === this.getMax()) {
      this.max.pop()
    }
    return number
  }

  push(number) {
    if (number <= this.getMin()) {
      this.min.push(number)
    }

    if (number >= this.getMax()) {
      this.max.push(number)
    }

    this.stack.push(number)
  }

  getMin() {
    return this.min.length ? this.min[this.min.length - 1] : Infinity
  }

  getMax() {
    return this.max.length ? this.max[this.max.length - 1] : -Infinity
  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
