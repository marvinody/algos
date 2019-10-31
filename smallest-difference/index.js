function smallestDifference(left, right) {
  const comp = (a, b) => a - b
  left.sort(comp)
  right.sort(comp)
  let bestLeft = 0, bestRight = 0;
  let bestDiff = Math.abs(left[bestLeft] + right[bestRight])
  let currLeft = 0, currRight = 0;

  while (currLeft < left.length && currRight < right.length) {
    const diff = Math.abs(left[currLeft] - right[currRight])
    if (diff < bestDiff) {
      bestLeft = currLeft
      bestRight = currRight
      bestDiff = diff
    }
    if (diff === 0) {
      break
    }
    if (left[currLeft] < right[currRight]) {
      currLeft++
    } else {
      currRight++;
    }
  }
  return [left[bestLeft], right[bestRight]]

  // Write your code here.
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
