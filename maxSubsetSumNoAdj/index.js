function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  if (array.length === 0) return 0
  if (array.length < 3) return Math.max(...array)
  const sums = array.map(() => 0)
  sums[0] = array[0]
  sums[1] = array[1]


  for (let i = 2; i < array.length; i++) {
    const n = array[i]
    const oneAway = sums[i - 1]

    sums[i] = Math.max(
      n, // could be by itself
      oneAway, // or the one before
      // add n to everything that's not adjacent
      ...sums.slice(0, i - 1).map(s => s + n)
    )
  }

  return Math.max(...sums)

}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
