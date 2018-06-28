// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor () {
    this.front = new Stack()
    this.back = new Stack()
  }

  add(value) {
    this.back.push(value)
  }

  remove() {
    this._ensureFront()

    return this.front.pop()
  }

  _ensureFront() {
    if (this.front.peek()) {
      return;
    }

    while (this.back.peek()) {
      this.front.push(this.back.pop())
    }
  }

  peek() {
    this._ensureFront()

    return this.front.peek()
  }
}

module.exports = Queue;
