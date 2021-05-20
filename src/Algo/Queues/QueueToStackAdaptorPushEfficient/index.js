const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

class Queue {
  queue;
  front;
  size;
  constructor(size) {
    this.queue = new Array(size);
    this.front = 0;
    this.size = 0;
  }
  enqueue(el) {
    if (this.size === this.queue.length) {
      return null;
    }
    // enqueue will be done from the rear
    // front will remain on the front
    const rear = (this.front + this.size) % this.queue.length;
    this.queue[rear] = el;
    this.size++;
  }
  dequeue() {
    if (this.size === 0) {
      console.log(`Queue underflow`);
      return null;
    }
    // dequeue will be done from the front
    const removed = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.queue.length; // increasing front circularly
    this.size--;
    return removed;
  }
  peek() {
    if (this.size === 0) {
      console.log(`Queue underflow`);
      return null;
    }
    return this.queue[this.front];
  }
  getSize() {
    return this.size;
  }
  display() {
    for (let i = 0; i < this.size; i++) {
      const index = (this.front + i) % this.queue.length;
      process.stdout.write(`${this.queue[index]} `);
    }
    console.log();
  }
}

class QueueToStackAdapterPushEfficient {
  mainQueue;
  helperQueue;
  constructor(len) {
    this.mainQueue = new Queue(len);
    this.helperQueue = new Queue(len);
  }
  push(el) {
    this.mainQueue.enqueue(el);
  }
  pop() {
    while (this.mainQueue.getSize() > 1) {
      this.helperQueue.enqueue(this.mainQueue.dequeue());
    }
    const target = this.mainQueue.dequeue();
    while (this.helperQueue.getSize() > 0) {
      this.mainQueue.enqueue(this.helperQueue.dequeue());
    }
    return target;
  }
  peek() {
    while (this.mainQueue.getSize() > 1) {
      this.helperQueue.enqueue(this.mainQueue.dequeue());
    }
    const target = this.mainQueue.dequeue();
    this.helperQueue.enqueue(target);
    while (this.helperQueue.getSize() > 0) {
      this.mainQueue.enqueue(this.helperQueue.dequeue());
    }
    return target;
  }
  getSize() {
    return this.mainQueue.getSize();
  }
}

const main = () => {
  //   const queueSize = +readMe();

  const queue = new QueueToStackAdapterPushEfficient(7);

  let input = readMe();
  while (input !== 'quit') {
    const data = input.split(' ').map((el) => el.trim());
    if (data[0] === 'push') {
      queue.push(+data[1]);
    } else if (data[0] === 'pop') {
      console.log(queue.pop());
    } else if (data[0] === 'top') {
      console.log(queue.peek());
    } else if (data[0] === 'size') {
      console.log(queue.getSize());
    }
    input = readMe();
  }
};

main();
