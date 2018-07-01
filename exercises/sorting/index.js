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

function mergeSort (arr) {
  if (arr.length === 1) {
    return arr
  }

  const mid = Math.floor(arr.length / 2)

  return merge(mergeSort(arr.slice(0 , mid)), mergeSort(arr.slice(mid)))
}

function merge (left, right) {
  const mergedArray = []

  while (left.length && right.length) {
    mergedArray.push(left[0] < right[0] ? left.shift() : right.shift())
  }

  return [...mergedArray, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge }
