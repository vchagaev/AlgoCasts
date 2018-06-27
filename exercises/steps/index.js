// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// TODO: recursion
function steps(n) {
  let stepsString = ''
  for (let i = 0; i < n; i++) {
    stepsString += ' '
  }

  for (let i = 1; i <= n; i++) {
    stepsString = stepsString.replace(' ', '#')
    console.log(stepsString)
  }
}

module.exports = steps;
