function threeNumberSum(arr, target) {
  // sort everything since we're prob gonna take longer than n log n
  arr.sort((a, b) => a - b)
  const matches = []
  // keep a leftmost pointer
  for (let i = 0; i < arr.length - 2; i++) {
    // then move over by 1, for our inner leftmost
    // and the far right is our rightmost
    // we'll update these according to sums
    let left = i + 1, right = arr.length - 1
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right]
      if (sum === target) {
        matches.push([arr[i], arr[left], arr[right]])
        left++
        right--
      } else if (sum < target) {
        left++
      } else if (sum > target) {
        right--
      }
    }
  }

  return matches
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
