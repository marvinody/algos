function minNumberOfCoinsForChange(target, denoms) {
  // Write your code here.
  const waysToMakeChange = Array(target + 1).fill(-1)
  waysToMakeChange[0] = 0;
  denoms.sort((a, b) => a - b).forEach(denom => {
    // always 1 coin to make the base cost
    if (denom <= target) waysToMakeChange[denom] = 1
    for (let n = denom + 1; n < waysToMakeChange.length; n++) {
      // if we can't make the pre-req change, don't bother
      if (waysToMakeChange[n - denom] === -1) continue

      // to make N, we can take the previous count and add 1 to it
      const newWaysToMakeChange = waysToMakeChange[n - denom] + 1
      // then if that's more optimal, let's update our records
      if (newWaysToMakeChange < waysToMakeChange[n] || waysToMakeChange[n] === -1) {
        waysToMakeChange[n] = newWaysToMakeChange
      }

    }
  });
  return waysToMakeChange[target]

}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
