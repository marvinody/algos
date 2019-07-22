const range = (list) => {
  let run = [list[0]];
  let s = '';

  for (let i = 1; i < list.length; i++) {
    if (run[run.length - 1] + 1 === list[i]) {
      run.push(list[i])
    } else { // new number
      const len = run.length
      s += len < 3 ? `,${run.join(',')}` : `,${run[0]}-${run[len - 1]}`
      run = [list[i]];
    }
  }
  const len = run.length
  s += len < 3 ? `,${run.join(',')}` : `,${run[0]}-${run[len - 1]}`
  return s.slice(1)
}

module.exports = {
  range,
}
