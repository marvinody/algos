function selectionSort(arr) {
  let i = 0;
  const swap = (a, b) => {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
  // invariant 0...i is sorted and all numbers are smaller than i...len
  while (i !== arr.length) {
    let j = i + 1
    let min = i;
    // find smallest in unsorted i...len
    while (j < arr.length) {
      if (arr[j] < arr[min]) {
        min = j;
      }
      j++
    }
    swap(i, min)

    i++
  }
  return arr

}

// Do not edit the line below.
exports.selectionSort = selectionSort;
