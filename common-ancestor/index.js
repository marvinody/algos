function getYoungestCommonAncestor(root, child1, child2) {
  // Write your code here.

  const getAncestorPath = node => {
    if (node === root) return [root]
    return [...getAncestorPath(node.ancestor), node]
  }
  const
    path1 = getAncestorPath(child1),
    path2 = getAncestorPath(child2)

  // so they both should have the same oldest ancestor
  let idx = 0
  // let's keep going up until they don't match
  while (path1[idx] === path2[idx]) {
    idx++
  }

  // and then we need to go one back cause we overshot
  idx--;

  return path1[idx]
}



// Do not edit the line below.
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;

