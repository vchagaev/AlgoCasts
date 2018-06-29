// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, level = 0, blocks = '') {
  if (level === n) {
    return;
  }

  const width = n * 2 - 1
  if (blocks.length === width) {
    console.log(blocks)
    return pyramid(n, level + 1)
  }

  const midpointIndex = Math.floor(width / 2)
  const curBlockIndex = blocks.length
  let add = ' '

  if ((curBlockIndex >= midpointIndex - level) && (curBlockIndex <= midpointIndex + level)) {
    add = '#'
  }

  return pyramid(n, level, blocks + add)
}

module.exports = pyramid;
