function invertBinaryTree(tree) {
  // Write your code here.
  if (tree === null) {
    return null;
  }
  const left = invertBinaryTree(tree.right)
  tree.right = invertBinaryTree(tree.left)
  tree.left = left
  return tree
}

// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;
