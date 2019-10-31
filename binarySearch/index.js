function binarySearch(array, target) {
  // Write your code here.
  let left = 0, right = array.length;
  while (left < right - 1) {
    let idx = Math.floor((left + right) / 2)
    if (array[idx] === target) {
      return idx;
    } else if (array[idx] < target) {
      left = idx;
    } else if (array[idx] > target) {
      right = idx;
    }
  }
  return -1;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
