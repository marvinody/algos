const numberSort = (a, b) => a - b;

function bubbleSort(array, cmp = numberSort) {
  if (array.length < 2) { return array; }
  const swap = (i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let haveSwapped = true;

  n = array.length - 1;
  while (haveSwapped) {
    haveSwapped = false;
    for (let i = 0; i < n; i++) {
      let a = array[i],
        b = array[i + 1];
      if (cmp(a, b) > 0) {
        // swap if a,b  > 1
        swap(i, i + 1);
        haveSwapped = true;
      }
    }
    n = n - 1;
  }
  return array;
}


// Do not edit the line below.
exports.bubbleSort = bubbleSort;
