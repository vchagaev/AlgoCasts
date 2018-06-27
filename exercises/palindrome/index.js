// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   const reverseStr = str.split('').reverse().join('')
//
//   return str === reverseStr
// }

// function palindrome(str) {
//   const mid = Math.floor(str.length / 2)
//
//   for (let i = 0; i <= mid; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false
//     }
//   }
//
//   return true
// }

function palindrome(str) {
  const length = str.length
  return str.split('').every((char, index) => char === str[length - 1 - index])
}

module.exports = palindrome;
