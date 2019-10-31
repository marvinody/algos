function insertionSort(arr) {
  const swap = (a, b) => {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
  // Write your code here.
  let i = 1;
  // invariant: 0...i is sorted
  // termination: i == len
  while (i !== arr.length) {
    let j = i

    while (j > 0 && arr[j] < arr[j - 1]) {
      swap(j, j - 1)
      j--;
    }

    i++
  }

  return arr
}



// Do not edit the line below.
exports.insertionSort = insertionSort;
