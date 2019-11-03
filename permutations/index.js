function getPermutations(array) {
  // Write your code here.
  if (array.length === 0) {
    return []
  } else if (array.length === 1) {
    return [[array[0]]]
  }
  const el = array[0]
  const subPerms = getPermutations(array.slice(1))
  // so flatmap cause we're returning nested arrays
  // then for each subperm, we want to place the first el in every slot
  const perms = subPerms.flatMap(subPerm => [...subPerm.map((_, idx) => {
    const firstHalf = subPerm.slice(0, idx)
    const secondHalf = subPerm.slice(idx)
    return [...firstHalf, el, ...secondHalf]
  }), [...subPerm, el]] // and then account for it at the very end too!
  )

  return perms
}

// Do not edit the line below.
exports.getPermutations = getPermutations;
