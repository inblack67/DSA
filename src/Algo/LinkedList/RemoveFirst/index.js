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
    this.size++;
  }
  printLast() {
    if (this.size === 0) {
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    console.log(curr.data);
  }
  insertAtPosition(el, position) {
    if (position < 0 || position >= this.size) {
      throw new Error('Invalid Position');
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
    this.size++;
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
    this.size++;
  }
  deleteFirst() {
    if (!this.head) {
      console.log(`List is empty`);
      return;
    }
    if (!this.head.next) {
      this.head = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
  }
  deleteLast() {
    if (!this.head) {
      throw new Error('Not Allowed');
    }
    if (!this.head.next) {
      this.head = null;
    } else {
      let currentNode = this.head;
      let prevNode = null;
      while (currentNode.next) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = null;
    }
    this.size--;
  }
  deleteFormPosition(position) {
    if (position < 0 || position >= this.size) {
      throw new Error('Invalid Position');
    }

    let currentPosition = 0;
    let currentNode = this.head;
    let prevNode = null;
    while (currentPosition < position) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      currentPosition++;
    }
    prevNode.next = currentNode.next;
    // delete currentNode.next;
    this.size--;
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

const main = () => {
  let str = readMe().split(' ');
  const mll = new MyLinkedList();
  while (str[0] !== 'quit') {
    if (str[0] === 'addLast') {
      mll.append(+str[1]);
    } else if (str[0].match('size')) {
      console.log(mll.getSize());
    } else if (str[0].match('display')) {
      mll.display();
    } else if (str[0].match('removeFirst')) {
      mll.deleteFirst();
    }
    str = readMe().split(' ');
  }
};

main();
