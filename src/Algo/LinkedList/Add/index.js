// const fs = require('fs');

// const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

// let currentLine = 0;
// const readMe = () => input[currentLine++];

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

  // sorted list will be passed
  removeDuplicates() {
    const res = new MyLinkedList();
    while (this.getSize() > 0) {
      const first = this.getFirst();
      this.deleteFirst();
      if (res.getSize() === 0 || res.tail.data !== first) {
        res.append(first);
      }
    }
    this.head = res.head;
    this.tail = res.tail;
    this.size = res.getSize();
  }

  display() {
    if (!this.head) {
      console.log();
      return;
    } else {
      let currentNode = this.head;
      while (currentNode) {
        process.stdout.write(`${currentNode.data} `);
        currentNode = currentNode.next;
      }
    }
    console.log();
  }

  displayReverseRecursive(curr) {
    if (!curr) {
      return;
    }
    this.displayReverseRecursive(curr.next);
    process.stdout.write(`${curr.data} `);
  }

  reverseRecursivePointerHelper(node) {
    if (!node) {
      return;
    }
    this.reverseRecursivePointerHelper(node.next);
    if (node !== this.tail) {
      node.next.next = node;
    }
  }

  reverseRecursivePointer() {
    // reverses the ll
    this.reverseRecursivePointerHelper(this.head);

    // swapping head and tail after reversing
    this.head.next = null;
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  oddEven() {
    const evenLL = new MyLinkedList();
    const oddLL = new MyLinkedList();
    let curr = this.head;
    while (curr) {
      if (curr.data % 2 === 0) {
        evenLL.append(curr.data);
      } else {
        oddLL.append(curr.data);
      }
      curr = curr.next;
    }
    if (oddLL.getSize() && evenLL.getSize()) {
      oddLL.tail.next = evenLL.head;
      this.head = oddLL.head;
      this.tail = evenLL.tail;
      this.size = oddLL.getSize() + evenLL.getSize();
    } else if (oddLL.getSize()) {
      this.head = oddLL.head;
      this.tail = oddLL.tail;
      this.size = oddLL.getSize();
    } else if (evenLL.getSize()) {
      this.head = evenLL.head;
      this.tail = evenLL.tail;
      this.size = evenLL.getSize();
    }
  }

  // reverse with k intervals
  KReverse(k) {
    let prev = new MyLinkedList();

    while (this.getSize() > 0) {
      const curr = new MyLinkedList();
      if (this.getSize() >= k) {
        for (let i = 0; i < k; i++) {
          const first = this.getFirst();
          this.deleteFirst();
          curr.insertAtHead(first);
        }
      } else {
        let size = this.getSize(); // need to store in the variable as main list is changing (removing els)
        for (let i = 0; i < size; i++) {
          const first = this.getFirst();
          this.deleteFirst();
          curr.append(first); // no reversing if k is greater
        }
      }
      if (!prev.head) {
        prev.head = curr.head;
        prev.tail = curr.tail;
        prev.size = curr.getSize();
      } else {
        prev.tail.next = curr.head;
        prev.tail = curr.tail;
        prev.size = prev.getSize() + curr.getSize();
      }
    }
    this.head = prev.head;
    this.tail = prev.tail;
    this.size = prev.getSize();
  }

  // 1,2,3,4,5
  isPalindromHelper(curr) {
    if (!curr) {
      return true;
    }
    const res = this.isPalindromHelper(curr.next);

    // returning time so curr's values will be operated in reverse order
    if (!res) {
      return false;
    } else if (curr.data !== this.past.data) {
      return false;
    } else {
      this.past = this.past.next;
      return true;
    }
  }

  past;
  isPalindromeRecursive(head) {
    this.past = head;
    let curr = head;
    return this.isPalindromHelper(curr);
  }

  getSize() {
    return this.size;
  }

  addHelper(ll1, ll1PlaceValue, ll2, ll2PlaceValue, res) {
    if (!ll1 && !ll2) {
      return 0; // carry
    }

    let data = 0;

    if (ll1PlaceValue > ll2PlaceValue) {
      const carry = this.addHelper(
        ll1.next,
        ll1PlaceValue - 1,
        ll2,
        ll2PlaceValue,
        res,
      );
      data = ll1.data + carry;
    } else if (ll1PlaceValue < ll2PlaceValue) {
      const carry = this.addHelper(
        ll1,
        ll1PlaceValue,
        ll2.next,
        ll2PlaceValue - 1,
        res,
      );
      data = ll2.data + carry;
    } else {
      const carry = this.addHelper(
        ll1.next,
        ll1PlaceValue - 1,
        ll2.next,
        ll2PlaceValue - 1,
        res,
      );
      data = ll1.data + ll2.data + carry;
    }
    const singleDigit = data % 10;
    const carry = Math.floor(data / 10);
    res.insertAtHead(singleDigit);
    return carry;
  }

  add(ll1, ll2) {
    const res = new MyLinkedList();
    const carry = this.addHelper(ll1, ll1.getSize(), ll2, ll2.getSize(), res);
    if (carry > 0) {
      res.insertAtHead(carry);
    }
    return res;
  }
}

const ll1 = new MyLinkedList();
ll1.append(1);
const ll2 = new MyLinkedList();
ll2.append(9);
ll2.append(9);
ll2.append(9);
const res = ll2.add(ll1, ll2);
console.log(res);

const main = () => {
  const numberOfElements1 = +readMe();
  const arr1 = readMe()
    .split(' ')
    .map((el) => +el);
  const ll1 = new MyLinkedList();
  for (let i = 0; i < arr1.length; i++) {
    ll1.append(arr1[i]);
  }
  const numberOfElements2 = +readMe();
  const arr2 = readMe()
    .split(' ')
    .map((el) => +el);
  const ll2 = new MyLinkedList();
  for (let i = 0; i < arr2.length; i++) {
    ll2.append(arr2[i]);
  }

  ll1.display();
  ll2.display();
  const sum = new MyLinkedList();
  const res = sum.add(ll1, ll2);
  res.display();
  res.insertAtHead(+readMe());
  res.append(+readMe());
  res.display();
};

// main();
