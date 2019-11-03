

// this soln. uses O(d1+d2) space where d1, d2 are depth of child1, child2
function getYoungestCommonAncestorBAD(root, child1, child2) {
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

// uses constant space
function getYoungestCommonAncestor(root, child1, child2) {
  // Write your code here.

  const getDepth = node => {
    if (node === root) return 0
    return 1 + getDepth(node.ancestor)
  }
  // get depth for both
  let
    depth1 = getDepth(child1),
    depth2 = getDepth(child2)

  // now, whoever is deeper, we'll go up a few times to match depths

  while (depth1 !== depth2) {
    // child1 is deeper, let's bring it up
    if (depth1 > depth2) {
      child1 = child1.ancestor
      depth1--
    } else {
      child2 = child2.ancestor
      depth2--
    }
  }
  while (child1 !== child2) {
    child1 = child1.ancestor
    child2 = child2.ancestor
  }

  return child1
}


// Do not edit the line below.
exports.getYoungestCommonAncestor = getYoungestCommonAncestor;

