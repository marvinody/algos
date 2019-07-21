
// https://www.codewars.com/kata/sum-by-factors/train/javascript
const primeFactors = n => {
  // prevents negs
  let currN = Math.abs(n);
  const factors = {};
  // keep dividing by 2 if we can
  while (currN % 2 === 0) {
    factors[2] = true
    currN /= 2
  }
  const max = Math.floor(Math.sqrt(currN))
  // can start at 3 and inc by 2 since evens are done
  for (let i = 3; i <= max; i += 2) {
    // maybe the i can divide multiple times, so while
    while (currN % i === 0) {
      factors[i] = true
      currN /= i
    }
  }
  // the last one might be a prime itself, so let's add it
  if (currN > 1) {
    factors[currN] = true;
  }
  // make sure they're not strings when returning
  return Object.keys(factors).map(Number)
}


const sumOfDivided = (nums) => {
  // we'll make an object where key is prime and val is sum
  return Object.entries(nums.reduce((acc, cur) => {
    // let's grab all the factors
    primeFactors(cur).forEach(n => {
      // init if needed
      if (!acc[n]) {
        acc[n] = 0;
      }
      // sum like wanted
      acc[n] += cur
    })
    return acc;
  }, {}))
    // change everything to a number
    .map(l => [Number(l[0]), Number(l[1])])
    // sort it incase it's not sorted by prime
    .sort((a, b) => a[0] - b[0])
}

module.exports = {
  sumOfDivided,
  primeFactors,
}

