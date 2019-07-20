const nameRegexp = new RegExp(/<(.*)>/);
const badChars = new RegExp(/[^\w- .]/g)
const phone = (strng, num) => {
  const entries = strng.split('\n')
  const lines = entries.filter(entry => entry.includes(num))
  if (lines.length === 0) {
    return `Error => Not found: ${num}`
  } else if (lines.length > 1) {
    return `Error => Too many people: ${num}`
  }
  const line = lines[0]
  const name = nameRegexp.exec(line)[1]
  const address = line
    .replace(num, '')
    .replace(nameRegexp, '')
    .replace(badChars, '')
    .replace('_', ' ')
    .split(' ')
    .filter(s => s.length > 0)
    .map(s => s.trim())
    .join(' ')

  const entry =
    `Phone => ${num}, Name => ${name}, Address => ${address}`
  return entry;
}

module.exports = phone
