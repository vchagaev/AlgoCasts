// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const mapCharToCount = new Map()

  for (let char of str) {
    const curCount = mapCharToCount.get(char) || 0

    mapCharToCount.set(char, curCount + 1)
  }

  let curMaxCharCountPair = [str[0], 1]

  for (let charCountPair of mapCharToCount) {
    if (charCountPair[1] > curMaxCharCountPair[1]) {
      curMaxCharCountPair = charCountPair
    }
  }

  return curMaxCharCountPair[0]
}

module.exports = maxChar;
