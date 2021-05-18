const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

class Stack {
  stack;
  top;
  size;
  isDynamic;
  constructor(size) {
    this.stack = size ? new Array(size) : [];
    this.isDynamic = size ? false : true;
    this.top = -1;
    this.size = 0;
  }
  push(el) {
    if (this.size === this.stack.length && !this.isDynamic) {
      console.log(`Stack overflow`);
      return this.size;
    }
    this.stack[++this.top] = el;
    this.size++;
    return this.size;
  }
  pop() {
    if (this.size === 0) {
      console.log(`Stack underflow`);
      return;
    }
    const popped = this.stack[this.top];
    delete this.stack[this.top];
    this.top--;
    this.size--;
    return popped;
  }
  peek() {
    if (this.size === 0) {
      console.log(`Stack underflow`);
      return;
    }
    return this.stack[this.top];
  }
  getSize() {
    return this.size;
  }
  display() {
    for (let i = 0; i < this.size; i++) {
      console.log(this.stack[i]);
    }
  }
}

class MinStack {
  stack;
  minStack;
  constructor() {
    this.stack = new Stack();
    this.minStack = Number.MAX_SAFE_INTEGER;
  }
  push(el) {
    if (this.stack.size === 0) {
      this.stack.push(el);
      this.minStack = el;
    } else if (el >= this.minStack) {
      this.stack.push(el);
    } else {
      this.minStack = el;
      const fakePush = el + el - this.minStack;
      this.stack.push(fakePush);
    }
  }
  pop() {
    const popped = this.stack.pop();
    if (popped === undefined) {
      return;
    }
    if (popped >= this.minStack) {
      console.log(popped);
      return popped;
    }
    if (popped < this.minStack) {
      this.minStack = 2 * this.minStack - popped;
    }
    console.log(popped);
    return popped;
  }
  display() {
    this.stack.display();
  }
  getTopElement() {
    if (this.stack.size === 0) {
      console.log(`Stack underflow`);
      return;
    }
    if (this.stack.peek() < this.minStack) {
      console.log(this.minStack);
      return this.minStack;
    } else {
      console.log(this.stack.peek());
      return this.stack.peek();
    }
  }
  getMin() {
    if (this.stack.size === 0) {
      console.log(`Stack underflow`);
      return;
    }
    console.log(this.minStack);
    return this.minStack;
  }
  getSize() {
    return this.stack.size;
  }
}

const main = () => {
  const stack = new MinStack();
  let input = readMe();
  while (input !== 'quit') {
    const data = input.split(' ').map((el) => el.trim());
    if (data[0] === 'push') {
      stack.push(+data[1]);
    } else if (data[0] === 'pop') {
      stack.pop();
    } else if (data[0] === 'top') {
      stack.getTopElement();
    } else if (data[0] === 'size') {
      console.log(stack.getSize());
    } else if (data[0] === 'min') {
      stack.getMin();
    } else if (data[0] === 'display') {
      stack.display();
    }
    input = readMe();
  }
};

main();
