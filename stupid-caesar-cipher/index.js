//https://www.codewars.com/kata/second-variation-on-caesar-cipher/train/javascript

// helper stuff to allow
// arbitrary ROT encoding stuff
// for an A-Z or a-z
const a = 'a'.codePointAt(0)
const A = 'A'.codePointAt(0)
const shiftChar = (char, shift) => {
  const codePt = char.codePointAt(0);
  // is it cap or lower, our math changes a little
  const base = codePt < a ? A : a
  const diff = codePt - base + shift;
  const fixed = ((diff % 26) + 26) % 26
  return String.fromCodePoint(base + fixed)
}

const partition = (arr, maxSize) => arr.reduce((acc, cur) => {
  if (acc[acc.length - 1].length >= maxSize) {
    acc.push([])
  }
  acc[acc.length - 1].push(cur)
  return acc
}, [[]])

const encode = (s, shift) => {
  const from = s[0].toLowerCase();
  const to = shiftChar(from, shift)

  const shifted = s
    .split('')
    .map(c => (/[a-zA-Z]/.test(c) ? shiftChar(c, shift) : c))
    .join('')

  const fullCipher = from + to + shifted
  const maxSize = Math.ceil(fullCipher.length / 5)
  const partitions = partition(fullCipher.split(''), maxSize).map(p => p.join(''))

  return partitions
}

const decode = (cipher) => {
  const fullCipher = cipher.join('');
  const shifted = fullCipher.slice(2) // first 2 are keys
  const from = fullCipher[0].codePointAt(0)
  const to = fullCipher[1].codePointAt(0)
  return shifted
    .split('')
    .map(c => (/[a-zA-Z]/.test(c) ? shiftChar(c, from - to) : c))
    .join('')
}

module.exports = {
  encode,
  decode,
  shiftChar
}
