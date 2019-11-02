function kadanesAlgorithm(array) {
  // Write your code here.
  // start counters lowest possible
  let bestSum = -Infinity
  let currentSum = -Infinity
  array.forEach(n => {
    // if by adding n, we get a better result than solo, let's add it!
    if ((currentSum + n) > n) {
      currentSum = currentSum + n
    } else {
      // if solo is better, then we'll solo it
      currentSum = n
    }
    // let's update our totals
    if (currentSum > bestSum) {
      bestSum = currentSum
    }
  });
  return Math.max(bestSum, currentSum)
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;
