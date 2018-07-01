// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const t = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = t
      }
    }
  }

  return arr
}

function selectionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let curMinIndex = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[curMinIndex] > arr[j]) {
        curMinIndex = j
      }
    }

    if (curMinIndex !== i) {
      const t = arr[i]
      arr[i] = arr[curMinIndex]
      arr[curMinIndex] = t
    }
  }

  return arr
}

// TODO: sort
function mergeSort (arr) {

}

function merge (left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort }
