// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// TODO: regexp
function vowels(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  }

  return str.split('').reduce((count, char) => count += vowels[char.toLowerCase()] ? 1 : 0, 0)
}

module.exports = vowels;
