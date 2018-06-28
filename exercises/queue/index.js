// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.queue = []
    this.startIndex = 0
  }

  add(value) {
    this.queue.push(value)
  }

  remove() {
    if (this.startIndex >= this.queue.length) {
      return;
    }

    const value = this.queue[this.startIndex]
    this.startIndex++

    return value
  }
}

module.exports = Queue;
