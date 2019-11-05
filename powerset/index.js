function powerset(array) {
  // Write your code here.
  const powerSet = [[]];
  // for each element in the given array
  // we'll add that element to each existing array that we've already generated
  array.forEach(el => {
    powerSet.push(
      ...powerSet.map(subset => subset.concat(el))
    )
  })
  return powerSet
}

// Do not edit the line below.
exports.powerset = powerset;
