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
      console.log(`List is empty`);
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    console.log(curr.data);
  }
  printFirst() {
    if (this.size === 0) {
      console.log(`List is empty`);
      return;
    }
    console.log(this.head.data);
  }
  printAt(index) {
    if (this.size === 0) {
      console.log(`List is empty`);
      return;
    }
    if (index >= this.size || index < 0) {
      console.log(`Invalid arguments`);
      return;
    }
    let curr = this.head;
    let count = 0;
    while (count < index) {
      curr = curr.next;
      count++;
    }
    console.log(curr.data);
  }
  insertAtPosition(el, position) {
    if (position < 0 || position > this.size) {
      console.log(`Invalid arguments`);
      return;
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
      console.log(`List is empty`);
      return;
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
  deleteFromPosition(position) {
    if (position < 0 || position > this.size - 1) {
      console.log(`Invalid arguments`);
      return;
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
    prevNode.next = currentNode.next;
    // delete currentNode.next;
    this.size--;
  }

  getNodeAt(index) {
    if (this.size === 0) {
      console.log(`List is empty`);
      return;
    }
    if (index >= this.size || index < 0) {
      console.log(`Invalid arguments`);
      return;
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
    if (!this.head) {
      console.log(`List is empty`);
      return;
    }
    if (this.size === 1) {
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
    if (!this.head) {
      console.log(`List is empty`);
      return;
    }
    if (this.size === 1) {
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
    } else if (str[0].match('removeLast')) {
      mll.deleteLast();
    } else if (str[0].match('removeAt')) {
      mll.deleteFromPosition(+str[1]);
    } else if (str[0].match('addFirst')) {
      mll.insertAtHead(+str[1]);
    } else if (str[0].match('getFirst')) {
      mll.printFirst();
    } else if (str[0].match('getLast')) {
      mll.printLast();
    } else if (str[0].match('getAt')) {
      mll.printAt(+str[1]);
    } else if (str[0].match('addAt')) {
      mll.insertAtPosition(+str[2], +str[1]);
    } else if (str[0].match('reverseDI')) {
      mll.reverseViaData();
    } else if (str[0].match('reversePI')) {
      mll.reverseViaPointer();
    }
    str = readMe().split(' ');
  }
};

main();
