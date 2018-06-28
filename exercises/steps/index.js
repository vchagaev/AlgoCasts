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

function steps(n, level = 0, blocks = '') {
  if (n === level) {
    return;
  }

  if (blocks.length === n) {
    console.log(blocks)
    return steps(n, level + 1)
  }

  blocks += blocks.length <= level ? '#' : ' '

  return steps(n, level, blocks)
}

module.exports = steps;
