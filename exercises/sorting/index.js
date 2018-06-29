// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// TODO: sort
function bubbleSort(arr) {
  for (let i = 0; i<arr.length; i++) {
    for (let j = 0; j<arr.length; j++) {
      if (arr[i] > arr[j]) {
        const t = arr[i]
        arr[i] = arr[j]
        arr[j] = t
      }
    }
  }

  return arr
}

// TODO: sort
function selectionSort(arr) {

}
// TODO: sort
function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
