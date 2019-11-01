// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	insert(value) {
		// Write your code here.
		// Do not edit the return statement of this method.
		if (value < this.value) {
			if (this.left) {
				this.left.insert(value);
			} else {
				this.left = new BST(value);
			}
		} else {
			if (this.right) {
				this.right.insert(value);
			} else {
				this.right = new BST(value);
			}
		}
		return this;
	}

	contains(value) {
		if (value === this.value) {
			return true;
		} else if (value < this.value && this.left) {
			return this.left.contains(value);
		} else if (value > this.value && this.right) {
			return this.right.contains(value);
		}
		return false;
	}

	minNode() {
		let curr = this;
		while (curr.left) {
			curr = curr.left
		}
		return curr
	}

	remove(value) {
		// it's somewhere in the children for these 2 cases
		if (value < this.value) {
			this.left = this.left.remove(value)
		} else if (value > this.value) {
			this.right = this.right.remove(value)
		} else {
			if (!this.left) {
				const right = this.right
				this.right = null;
				return right
			} else if (!this.right) {
				const left = this.left
				this.left = null
				return left
			} else {
				const smallest = this.right.minNode()
				this.value = smallest.value
				this.right.remove(smallest.value)

			}
		}
		return this;
	}
}

// Do not edit the line below.
exports.BST = BST;
