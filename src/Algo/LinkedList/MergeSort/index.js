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
      console.log(`List is empty`);
      return null;
    }
    return this.tail.data;
  }
  getFirst() {
    if (this.size === 0) {
      console.log(`List is empty`);
      return null;
    }
    return this.head.data;
  }
  getAt(index) {
    if (this.size === 0) {
      console.log(`List is empty`);
      return null;
    }
    if (index >= this.size || index < 0) {
      console.log(`Invalid arguments`);
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
      console.log(`Invalid arguments`);
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
      console.log(`List is empty`);
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
      console.log(`List is empty`);
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
    if (this.getSize() === 0) {
      console.log(`List is empty`);
      return;
    }

    if (position < 0 || position > this.size - 1) {
      console.log(`Invalid arguments`);
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
      console.log(`List is empty`);
      return null;
    }
    if (index >= this.size || index < 0) {
      console.log(`Invalid arguments`);
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
  getKthElementFromTheEnd(k) {
    if (this.getSize() === 0) {
      console.log(`List is empty`);
      return null;
    }

    if (k >= this.getSize() || k < 0) {
      console.log(`Invalid arguments`);
      return null;
    }

    if (k === 0) {
      return this.tail.data;
    }

    let curr = this.head;
    let prev = this.head;

    for (let i = 0; i < k; i++) {
      curr = curr.next;
    }

    // now curr will maintain k distance from the prev node
    while (curr.next) {
      prev = prev.next;
      curr = curr.next;
    }
    return prev.data;
  }

  getMidEl() {
    if (!this.head) {
      console.log(`List is empty`);
      return null;
    }

    if (this.getSize() === 1) {
      return this.head.data;
    }

    // when fast moves 2 steps, slow moves 1
    let fast = this.head;
    let slow = this.head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.data;
  }
  getMidNode(head, tail) {
    // when fast moves 2 steps, slow moves 1
    let fast = head;
    let slow = head;
    while (fast !== tail && fast.next !== tail) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  mergeTwoSortedList(ll1, ll2) {
    let size1 = ll1.getSize();
    let size2 = ll2.getSize();

    let i = 0;
    let j = 0;

    let curr1 = ll1.head;
    let curr2 = ll2.head;
    while (i < size1 && j < size2) {
      const el1 = curr1.data;
      const el2 = curr2.data;
      if (el1 < el2) {
        this.append(el1);
        curr1 = curr1.next;
        i++;
      } else {
        this.append(el2);
        curr2 = curr2.next;
        j++;
      }
    }
    for (; i < size1; i++) {
      this.append(curr1.data);
      curr1 = curr1.next;
    }
    for (; j < size2; j++) {
      this.append(curr2.data);
      curr2 = curr2.next;
    }
  }
  mergeTwoSortedList2(ll1, ll2) {
    const mergedLL = new MyLinkedList();

    let size1 = ll1.getSize();
    let size2 = ll2.getSize();

    let i = 0;
    let j = 0;

    let curr1 = ll1.head;
    let curr2 = ll2.head;
    while (i < size1 && j < size2) {
      const el1 = curr1.data;
      const el2 = curr2.data;
      if (el1 < el2) {
        mergedLL.append(el1);
        curr1 = curr1.next;
        i++;
      } else {
        mergedLL.append(el2);
        curr2 = curr2.next;
        j++;
      }
    }
    for (; i < size1; i++) {
      mergedLL.append(curr1.data);
      curr1 = curr1.next;
    }
    for (; j < size2; j++) {
      mergedLL.append(curr2.data);
      curr2 = curr2.next;
    }
    return mergedLL;
  }

  mergeSort(low, high) {
    if (low === high) {
      const newLL = new MyLinkedList();
      newLL.append(low.data);
      return newLL;
    }

    const mid = this.getMidNode(low, high);
    const first = this.mergeSort(low, mid);
    const second = this.mergeSort(mid.next, high);
    const mergedLL = this.mergeTwoSortedList2(first, second);
    return mergedLL;
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
  const size1 = +readMe();
  const ll1 = new MyLinkedList();
  if (size1 > 0) {
    const arr1 = readMe()
      .split(' ')
      .map((el) => +el.trim());
    for (let i = 0; i < arr1.length; i++) {
      ll1.append(arr1[i]);
    }
  } else {
    readMe();
  }

  const res = ll1.mergeSort(ll1.head, ll1.tail);
  res.display();
  ll1.display();
};

main();
