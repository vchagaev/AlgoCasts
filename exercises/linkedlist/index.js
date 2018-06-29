// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node) {
    this.data = data
    this.next = node || null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.cur = null
  }

  insertFirst(data) {
    this.head = this.head ? new Node(data, this.head) : new Node(data)
  }

  size() {
    let index = 0;
    let curNode = this.head

    while (curNode) {
      index += 1
      curNode = curNode.next
    }

    return index
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if (!this.head) {
      return
    }

    let last = this.head

    while (last.next) {
      last = last.next
    }

    return last
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next
    }
  }

  removeLast() {
    if (!this.head || !this.head.next) {
      this.head = null
      return
    }

    let prev = this.head
    let cur = this.head.next

    while (cur.next) {
      prev = cur
      cur = cur.next
    }

    prev.next = null
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data)
      return;
    }

    const lastNode = this.getLast()
    lastNode.next = new Node(data)
  }

  getAt(n) {
    if (!this.head) {
      return null
    }

    let curIndex = 0
    let curNode = this.head

    while (curNode) {
      if (curIndex === n) {
        return curNode
      }

      curNode = curNode.next
      curIndex += 1
    }

    return null
  }

  removeAt(n) {
    if (!this.head) {
      return null
    }

    if (n === 0) {
      this.head = this.head.next
      return
    }

    const prev = this.getAt(n - 1)
    const cur = this.getAt(n)
    if (!prev || !cur ) {
      return
    }

    prev.next = cur.next
  }

  insertAt(data, n) {
    if (n === 0) {
      this.head = new Node(data, this.head)
      return
    }

    const prev = this.getAt(n - 1)
    const cur = this.getAt(n)

    if (!cur) {
      this.insertLast(data)
      return
    }

    prev.next = new Node(data, cur)
  }

  forEach(fn) {
    let curNode = this.head
    let counter = 0

    while (curNode) {
      fn.call(null, curNode, counter);
      curNode = curNode.next
      counter++
    }
  }

  *[Symbol.iterator]() {
    let cur = this.head

    while (cur) {
      yield cur
      cur = cur.next
    }
  }
}

module.exports = { Node, LinkedList };
