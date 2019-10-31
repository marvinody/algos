function productSum(array, depth = 1) {
  // Write your code here.
  return array.reduce(
    (acc, cur) => acc +
      (Array.isArray(cur)
        ? productSum(cur, depth + 1)
        : cur)
    , 0) * depth
}

// Do not edit the line below.
exports.productSum = productSum;
