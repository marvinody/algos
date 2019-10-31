function findThreeLargestNumbers(array) {
  // Write your code here.
  const sorted = arr => arr.sort((a, b) => a - b)
  let largest = sorted(array.slice(0, 3))
  for (let i = 3; i < array.length; i++) {
    if (array[i] > largest[0]) {
      largest = sorted([...largest, array[i]]).slice(1)
    }
  }
  return largest
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
