function numberOfWaysToMakeChange(target, denoms) {
  const waysToMakeChange = Array(target + 1).fill(0) // +1 because up to n inclusive
  waysToMakeChange[0] = 1

  denoms.forEach(denom => {
    // the denom by itself can make some change
    waysToMakeChange[denom] += 1
    // add up any past change
    for (let n = denom + 1; n < waysToMakeChange.length; n++) {
      waysToMakeChange[n] += waysToMakeChange[n - denom]
    }
  });
  return waysToMakeChange[target]
  // Write your code here.
}

// Do not edit the line below.
exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;

