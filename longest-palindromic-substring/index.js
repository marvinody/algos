function longestPalindromicSubstring(string) {
  // Write your code here.
  const findLongestSurroundingPalindrome = (letter, idx, chars) => {
    // imagine palindrome is odd number of chars first
    // meaning it would be centered around idx
    let leftIdx = idx, rightIdx = idx
    while (leftIdx >= 0 && rightIdx < chars.length && chars[leftIdx] === chars[rightIdx]) {
      leftIdx--;
      rightIdx++;
    }
    const oddLongest = chars.slice(leftIdx + 1, rightIdx).join('')

    leftIdx = idx, rightIdx = idx + 1
    while (leftIdx >= 0 && rightIdx < chars.length && chars[leftIdx] === chars[rightIdx]) {
      leftIdx--;
      rightIdx++;
    }
    const evenLongest = chars.slice(leftIdx + 1, rightIdx).join('')
    return oddLongest.length > evenLongest.length ? oddLongest : evenLongest
  }
  // run the function above for each letter
  const longestPalindromicSubstringsEverywhere = Array.from(string).map(findLongestSurroundingPalindrome)
  // sort it to bring largest lengths out to the front
  longestPalindromicSubstringsEverywhere.sort((a, b) => b.length - a.length)

  return longestPalindromicSubstringsEverywhere[0]
}
// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;
