function twoNumberSum(array, targetSum) {
  // Write your code here.
	// num -> bool
	const seen = new Set();
	for(let i=0; i<array.length; i++) {
		const diff = targetSum - array[i];
		if (seen.has(diff)) {
			return [diff, array[i]].sort((a,b) => a - b);
		}
		seen.add(array[i])
	}
	return []
}

// Do not edit the line below.
module.exports.twoNumberSum = twoNumberSum;
