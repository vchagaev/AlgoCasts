// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function stringEqualizer (str) {
//   return str.split('').filter(char => char.match(/\w/)).join('').toLowerCase()
// }

// function getCharToCountMap (str) {
//   const charToCountMap = new Map()
//
//   for (let char of str) {
//     const curCount = charToCountMap.get(char) || 0
//     charToCountMap.set(char, curCount + 1)
//   }
//
//   return charToCountMap
// }

// function anagrams(stringA, stringB) {
//   const a = stringEqualizer(stringA)
//   const b = stringEqualizer(stringB)
//
//   if (a.length !== b.length) {
//     return false
//   }
//
//   const charToCountMapA = getCharToCountMap(a)
//   const charToCountMapB = getCharToCountMap(b)
//
//   if (charToCountMapA.size !== charToCountMapB.size) {
//     return false
//   }
//
//   for (let [curChar, curCount] of charToCountMapA.entries()) {
//     if (curCount !== charToCountMapB.get(curChar)) {
//       return false
//     }
//   }
//
//   return true
// }

function stringEqulizer (str) {
  return str
    .split('')
    .filter(char => char.match(/\w/))
    .map(char => char.toLowerCase())
    .sort()
    .join('')
}

function anagrams(strA, strB) {
  return stringEqulizer(strA) === stringEqulizer(strB)
}

module.exports = anagrams;
