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
  tail;
  size;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(el) {
    const newNode = new MyNode(el);
    if (!this.head) {
      // first node
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return ++this.size;
  }
  getLast() {
    if (this.size === 0) {
      return null;
    }
    return this.tail.data;
  }
  getFirst() {
    if (this.size === 0) {
      return null;
    }
    return this.head.data;
  }
  getAt(index) {
    if (this.size === 0) {
      return null;
    }
    if (index >= this.size || index < 0) {
      return null;
    }
    if (index === 0) {
      return this.getFirst();
    }
    if (index === this.size - 1) {
      return this.getLast();
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
      return this.insertAtHead(el);
    }

    if (position === size - 1) {
      return this.append(el);
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
      this.head = newNode;
      this.tail = newNode;
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
    const deletedItem = this.head.data;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
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
      deletedItem = this.head.data;
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      let prevNode = null;
      while (currentNode.next) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      deletedItem = currentNode.data;
      prevNode.next = null;
      this.tail = prevNode;
    }
    this.size--;
    return deletedItem;
  }
  deleteFromPosition(position) {
    if (position < 0 || position > this.size - 1) {
      return null;
    }

    if (position === 0) {
      return this.deleteFirst(position);
    }

    if (position === this.size - 1) {
      return this.deleteLast();
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

    if (index === 0) {
      return this.head;
    }

    if (index === this.size - 1) {
      return this.tail;
    }
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
    this.tail = this.head;
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

class LLToQueueAdapter {
  queue;
  constructor() {
    this.queue = new MyLinkedList();
  }
  add(el) {
    this.queue.append(el);
  }
  remove() {
    return this.queue.deleteFirst();
  }
  peek() {
    return this.queue.getFirst();
  }
  getSize() {
    return this.queue.getSize();
  }
  display() {
    this.queue.display();
  }
}

const main = () => {
  let str = readMe().split(' ');
  const queue = new LLToQueueAdapter();
  while (str[0] !== 'quit') {
    if (str[0] === 'add') {
      queue.add(+str[1]);
    } else if (str[0].match('size')) {
      console.log(queue.getSize());
    } else if (str[0].match('remove')) {
      const popped = queue.remove();
      if (popped === null) {
        console.log(`Queue underflow`);
      } else {
        console.log(popped);
      }
    } else if (str[0].match('peek')) {
      const el = queue.peek();
      if (el === null) {
        console.log(`Queue underflow`);
      } else {
        console.log(el);
      }
    }
    str = readMe().split(' ');
  }
};

main();
