// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse (str) {
  return str
    .split('')
    .reverse()
    .join('')
}

// function reverse(str) {
//   const strLength = str.length
//   let reverseStr = ''
//
//   for (let i = strLength - 1; i >= 0; i--) {
//     reverseStr += str[i]
//   }
//
//   return reverseStr
// }

// function reverse(str) {
//   return str.split('').reduce((rev, letter) => letter + rev, '')
// }

// function reverse(str) {
//   let reversedStr = ''
//
//   for (let letter of str) {
//     reversedStr = letter + reversedStr
//   }
//
//   return reversedStr
// }

module.exports = reverse
