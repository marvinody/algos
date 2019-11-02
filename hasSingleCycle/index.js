function hasSingleCycle(array) {
  // Write your code here.
  // name changing
  const jumpsRemaining = array.length;
  // where we at
  let curIdx = 0;
  // definitely need this many jumps
  for (j = 0; j < jumpsRemaining; j++) {
    // jump to next thing
    curIdx += array[curIdx];
    // fix wraparounds (with negatives)
    curIdx = ((curIdx % array.length) + array.length) % array.length;
    // if we land at 0 before we're done, no bueno
    if (curIdx == 0 && j < jumpsRemaining - 1) {
      return false
    }

  }
  // if we land at 0 at the end, then we're gucci
  return curIdx === 0;

}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;
