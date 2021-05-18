const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

class Queue {
  queue;
  front;
  constructor(size) {
    this.queue = new Array(size);
    this.front = 0;
    this.size = 0;
  }
  enqueue(el) {
    if (this.size === this.queue.length) {
      const largeQueue = new Array(this.queue.length * 2);
      for (let i = 0; i < largeQueue.length; i++) {
        const index = (this.front + i) % this.queue.length;
        largeQueue[i] = this.queue[index];
      }
      this.queue = largeQueue;
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
      return;
    }
    // dequeue will be done from the front
    const removed = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.queue.length; // increasing front circularly
    this.size--;
    console.log(removed);
    return removed;
  }
  peek() {
    if (this.size === 0) {
      console.log(`Queue underflow`);
      return;
    }
    console.log(this.queue[this.front]);
    return this.queue[this.front];
  }
  getSize() {
    console.log(this.size);
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

const main = () => {
  const queueSize = +readMe();

  const queue = new Queue(queueSize);

  let input = readMe();
  while (input !== 'quit') {
    const data = input.split(' ').map((el) => el.trim());
    if (data[0] === 'add') {
      queue.enqueue(+data[1]);
    } else if (data[0] === 'remove') {
      queue.dequeue();
    } else if (data[0] === 'peek') {
      queue.peek();
    } else if (data[0] === 'size') {
      queue.getSize();
    } else if (data[0] === 'display') {
      queue.display();
    }
    input = readMe();
  }
};

main();

// const queue = new Queue(5);
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.display();
// console.log(queue.getSize());
// console.log(queue.peek());
