function findClosestValueInBst(tree, target) {
  // Write your code here.
	let curr = tree
	let closest = curr.value
	while (curr) {
		const diff = Math.abs(curr.value - target)
		if (diff < Math.abs(closest - target)) {
			closest = curr.value
		}

		// if target is "between left and root", go left
		if (curr.left && target < curr.value) {
			curr = curr.left
		//if target is "between root and right", go right
		} else if(curr.right && target > curr.value) {
			curr = curr.right
		} else {
			break;
		}
	}
	return closest
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
