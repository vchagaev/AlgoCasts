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

  // TODO: null in the head
  getLast() {
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

  // TODO: using getLast
  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data)
      return;
    }

    let cur = this.head

    while (cur.next) {
      cur = cur.next
    }

    cur.next = new Node(data)
  }

  // TODO: return from while
  getAt(n) {
    if (!this.head) {
      return null
    }

    let curIndex = 0
    let curNode = this.head

    while (curIndex !== n && curNode) {
      curNode = curNode.next
      curIndex += 1
    }

    return curNode ? curNode : null
  }

  // TODO: simplify and using getAt
  removeAt(n) {
    if (!this.head) {
      return null
    }

    let prevNode = null
    let curNode = this.head
    let curIndex = 0

    while (curIndex !== n && curNode) {
      prevNode = curNode
      curNode = curNode.next
      curIndex += 1
    }

    if (!curNode) {
      return null
    }

    if (!prevNode) {
      this.head = this.head.next
    } else {
      prevNode.next = curNode.next
    }
  }

  // TODO: simplify and using getAt
  insertAt(data, n) {
    if (n === 0) {
      this.head = new Node(data, this.head)
      return;
    }

    let curIndex = 0
    let curNode = this.head
    let prevNode = this.head

    while (curIndex !== n && curNode && prevNode) {
      prevNode = curNode
      curNode = curNode && curNode.next
      curIndex += 1
    }

    prevNode.next = new Node(data, curNode)
  }

  // TODO: with counter
  forEach(fn) {
    let curNode = this.head

    while (curNode) {
      fn.call(null, curNode);
      curNode = curNode.next
    }
  }

  // TODO: with generators
  [Symbol.iterator]() {
    return this
  }

  // TODO: only generators
  next() {
    if (!this.cur) {
      this.cur = this.head
    } else {
      this.cur = this.cur.next
    }

    const isLast = !this.cur || !this.cur.next
    const result = {done: isLast}

    if (this.cur) {
      result.value = {
        data: this.cur.data
      }
    }

    if (isLast) {
      this.cur = null
    }

    return result
  }
}

module.exports = { Node, LinkedList };
