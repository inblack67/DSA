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
      return -1;
    }
    const popped = this.stack[this.top];
    delete this.stack[this.top--];
    this.size--;
    return popped;
  }
  peek() {
    if (this.size === 0) {
      return -1;
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
    this.minStack = new Stack();
  }
  push(el) {
    this.stack.push(el);
    if (this.minStack.size === 0 || el <= this.minStack.peek()) {
      this.minStack.push(el);
    }
  }
  pop() {
    const popped = this.stack.pop();
    if (this.minStack.peek() === popped) {
      this.minStack.pop();
    }
    return popped;
  }
  display() {
    this.stack.display();
  }
  getTopElement() {
    return this.stack.peek();
  }
  getMin() {
    if (this.minStack.size === 0) {
      console.log(`Stack underflow`);
      return -1;
    } else {
      console.log(this.minStack.peek());
      return this.minStack.peek();
    }
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
      console.log(stack.pop());
    } else if (data[0] === 'top') {
      console.log(stack.getTopElement());
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

// const stack = new MinStack();
// stack.push(10);
// stack.push(2);
// stack.push(5);
// stack.push(8);
// console.log(stack.pop());
// console.log(stack.getTopElement());
// stack.getMin();
// stack.push(2);
// stack.push(11);
// console.log(stack.getTopElement());
// stack.getMin();
// console.log(stack.pop());
// console.log(stack.getTopElement());
// stack.getMin();
// console.log(stack.pop());
// console.log(stack.getTopElement());
// stack.push(4);
// stack.getMin();
// console.log(stack.pop());
// console.log(stack.getTopElement());
// stack.getMin();
// console.log(stack.pop());
// console.log(stack.getTopElement());
// stack.getMin();
// console.log(stack.pop());
