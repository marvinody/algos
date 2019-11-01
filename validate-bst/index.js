function validateBst(tree, smallest = -Infinity, biggest = +Infinity) {
  // console.log({tree})
  if (tree.value < smallest || tree.value >= biggest) {
    return false
  }
  if (tree.left) {
    // if the left sub tree isn't correct, then false
    if (!validateBst(tree.left, smallest, tree.value)) {
      return false
    }
  }
  if (tree.right) {
    // if the right sub tree isn't correct, then false
    if (!validateBst(tree.right, tree.value, biggest)) {
      return false
    }
  }
  return true
}

// Do not edit the line below.
exports.validateBst = validateBst;
