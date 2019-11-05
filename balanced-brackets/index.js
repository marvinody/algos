const getOppBracket = char => {
  switch (char) {
    case '{': return '}'
    case '}': return '{'
    case '(': return ')'
    case ')': return '('
    case '[': return ']'
    case ']': return '['
    default: return ''
  }
}

function balancedBrackets(string) {
  const stack = []

  for (let idx = 0; idx < string.length; idx++) {
    const char = string[idx];
    // handle opening chars
    if (false // false is to make the next lines look nicer
      || char === '{'
      || char === '('
      || char === '['
    ) {
      // we'll push the bracket we expect
      stack.push(getOppBracket(char))
    }

    if (false
      || char === '}'
      || char === ')'
      || char === ']'
    ) {
      // grab the expected one from the stack
      const expectedChar = stack.pop()
      // if no match, then it's mismatched
      if (char !== expectedChar) {
        return false
      }
    }

  }

  // prevents [[[[[[ from being true. stack would be very big and not 0 len
  return stack.length === 0
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;
