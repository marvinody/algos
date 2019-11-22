function knapsackProblem(items, capacity, idx = 0) {
  // Write your code here.
  if (capacity <= 0) {
    return [0, []]
  }
  const item = items[idx]

  const [value, weight] = item
  if (idx === items.length - 1) {
    if (weight <= capacity) {
      return [value, [idx]]
    } else {
      return [0, []]
    }
  } else {
    const withItem = knapsackProblem(items, capacity - weight, idx + 1)
    const withoutItem = knapsackProblem(items, capacity, idx + 1)
    // better including the item in the current set
    if ((withItem[0] + value) >= withoutItem[0] && capacity >= weight) {
      return [withItem[0] + item[0], [idx, ...withItem[1]]]
    } else {
      // better without the item
      return withoutItem
    }
  }
}

// Do not edit the line below.
exports.knapsackProblem = knapsackProblem;
