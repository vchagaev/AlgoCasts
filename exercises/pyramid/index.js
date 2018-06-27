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

function getExtraBlocksForLevel (level) {
  if (level === 1) {
    return '#'
  } else {
    return '##'
  }
}

function getSpaces (n) {
  let spaces = ''

  for (let i = 0; i < n; i++) {
    spaces += ' '
  }

  return spaces
}

function fillSpacesToWidth (blocks, width) {
  const spaces = getSpaces((width - blocks.length) / 2)

  return `${spaces}${blocks}${spaces}`
}

// TODO: recursion
function pyramid(n) {
  const width = n * 2 - 1

  let blocks = ''

  for (let level = 1; level <= n; level++) {
    blocks += getExtraBlocksForLevel(level)
    console.log(fillSpacesToWidth(blocks, width))
  }
}

module.exports = pyramid;
