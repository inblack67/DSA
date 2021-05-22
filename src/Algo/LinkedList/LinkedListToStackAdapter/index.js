const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

class MyNode {
  data;
  next;
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class MyLinkedList {
  head;
  size;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(el) {
    const newNode = new MyNode(el);
    if (!this.head) {
      // first node
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    return ++this.size;
  }
  getLast() {
    if (this.size === 0) {
      return null;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    return curr.data;
  }
  getFirst() {
    if (this.size === 0) {
      return null;
    }
    return this.head.data.data;
  }
  getAt(index) {
    if (this.size === 0) {
      return null;
    }
    if (index >= this.size || index < 0) {
      return null;
    }
    let curr = this.head;
    let count = 0;
    while (count < index) {
      curr = curr.next;
      count++;
    }
    return curr.data;
  }
  insertAtPosition(el, position) {
    if (position < 0 || position > this.size) {
      return null;
    }

    if (position === 0) {
      this.insertAtHead(el);
      return;
    }

    const newNode = new MyNode(el);
    let currentPosition = 0;
    let currentNode = this.head;
    let prevNode = null;
    while (currentPosition < position) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentPosition++;
    }
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    return ++this.size;
  }
  insertAtHead(el) {
    const newNode = new MyNode(el);
    if (!this.head) {
      // first node
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return ++this.size;
  }
  deleteFirst() {
    if (!this.head) {
      return null;
    }
    const deletedItem = this.head.data.data;
    if (!this.head.next) {
      this.head = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return deletedItem;
  }
  deleteLast() {
    if (!this.head) {
      return null;
    }
    let deletedItem;
    if (!this.head.next) {
      deletedItem = this.head.data.data;
      this.head = null;
    } else {
      let currentNode = this.head;
      let prevNode = null;
      while (currentNode.next) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      deletedItem = currentNode.data;
      prevNode.next = null;
    }
    this.size--;
    return deletedItem;
  }
  deleteFromPosition(position) {
    if (position < 0 || position > this.size - 1) {
      return null;
    }

    if (position === 0) {
      this.deleteFirst(position);
      return;
    }

    let currentPosition = 0;
    let currentNode = this.head;
    let prevNode = null;
    while (currentPosition < position) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentPosition++;
    }
    const deletedItem = currentNode.data;
    prevNode.next = currentNode.next;
    // delete currentNode.next;
    this.size--;
    return deletedItem;
  }

  getNodeAt(index) {
    if (this.size === 0) {
      return null;
    }
    if (index >= this.size || index < 0) {
      return null;
    }
    let curr = this.head;
    let count = 0;
    while (count < index) {
      curr = curr.next;
      count++;
    }
    return curr;
  }

  reverseViaData() {
    if (!this.head || this.size === 1) {
      return;
    }
    let i = 0;
    let j = this.size - 1;
    while (i < j) {
      const node1 = this.getNodeAt(i);
      const node2 = this.getNodeAt(j);
      let temp = node1.data;
      node1.data = node2.data;
      node2.data = temp;
      i++;
      j--;
    }
  }
  reverseViaPointer() {
    if (!this.head || this.size === 1) {
      return;
    }
    let curr = this.head;
    let prev = null;
    while (curr) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head = prev;
  }

  display() {
    if (!this.head) {
      console.log();
      return;
    } else {
      let currentNode = this.head;
      while (currentNode) {
        process.stdout.write(currentNode.data.toString() + ' ');
        currentNode = currentNode.next;
      }
    }
    console.log();
  }
  getSize() {
    return this.size;
  }
}

class LLToStackAdapter {
  stack;
  constructor() {
    this.stack = new MyLinkedList();
  }
  push(el) {
    const newNode = new MyNode(el);
    this.stack.insertAtHead(newNode);
  }
  pop() {
    return this.stack.deleteFirst();
  }
  peek() {
    return this.stack.getFirst();
  }
  getSize() {
    return this.stack.getSize();
  }
}

const main = () => {
  let str = readMe().split(' ');
  const stack = new LLToStackAdapter();
  while (str[0] !== 'quit') {
    if (str[0] === 'push') {
      stack.push(+str[1]);
    } else if (str[0].match('size')) {
      console.log(stack.getSize());
    } else if (str[0].match('pop')) {
      const popped = stack.pop();
      if (popped === null) {
        console.log(`Stack underflow`);
      } else {
        console.log(popped);
      }
    } else if (str[0].match('top')) {
      const el = stack.peek();
      if (el === null) {
        console.log(`Stack underflow`);
      } else {
        console.log(el);
      }
    }
    str = readMe().split(' ');
  }
};

main();
