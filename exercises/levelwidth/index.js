// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const LEVEL_SEPARATOR = 'LEVEL_SEPARATOR'

function levelWidth(root) {
  if (!root) {
    return null
  }

  const nodes = [root, LEVEL_SEPARATOR]
  const levelToCountArray = []
  let curLevel = 0

  while (nodes.length > 1) {
    const curNode = nodes.shift()

    if (curNode === LEVEL_SEPARATOR) {
      curLevel++
      nodes.push(LEVEL_SEPARATOR)
    } else {
      const curLevelCount = levelToCountArray[curLevel] || 0
      levelToCountArray[curLevel] = curLevelCount + 1
      nodes.push(...curNode.children)
    }
  }

  return levelToCountArray
}

module.exports = levelWidth;
