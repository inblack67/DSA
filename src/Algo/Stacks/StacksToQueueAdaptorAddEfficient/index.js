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
      return this.size;
    }
    this.stack[++this.top] = el;
    this.size++;
    return this.size;
  }
  pop() {
    if (this.size === 0) {
      return null;
    }
    const popped = this.stack[this.top];
    delete this.stack[this.top--];
    this.size--;
    return popped;
  }
  peek() {
    if (this.size === 0) {
      return null;
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

class StackToQueueAddEfficient {
  mainStack;
  helperStack;
  constructor(size) {
    this.mainStack = new Stack(size);
    this.helperStack = new Stack(size);
  }
  add(el) {
    this.mainStack.push(el);
  }
  remove() {
    if (this.mainStack.getSize() === 0) {
      console.log(`Queue underflow`);
      return null;
    }
    while (this.mainStack.getSize() > 1) {
      this.helperStack.push(this.mainStack.pop());
    }
    const target = this.mainStack.pop();
    while (this.helperStack.getSize() > 0) {
      this.mainStack.push(this.helperStack.pop());
    }
    return target;
  }
  peek() {
    if (this.mainStack.getSize() === 0) {
      console.log(`Queue underflow`);
      return null;
    }
    while (this.mainStack.getSize() > 1) {
      this.helperStack.push(this.mainStack.pop());
    }
    const target = this.mainStack.pop();
    this.helperStack.push(target);
    while (this.helperStack.getSize() > 0) {
      this.mainStack.push(this.helperStack.pop());
    }
    return target;
  }
  getSize() {
    return this.mainStack.getSize();
  }
}

const main = () => {
  const stack = new StackToQueueAddEfficient();
  let input = readMe();
  while (input !== 'quit') {
    const data = input.split(' ').map((el) => el.trim());
    if (data[0] === 'add') {
      stack.add(+data[1]);
    } else if (data[0] === 'remove') {
      const removedEl = stack.remove();
      if (removedEl !== null && removedEl !== undefined) {
        console.log(removedEl);
      }
    } else if (data[0] === 'peek') {
      const el = stack.peek();
      if (el !== null && el !== undefined) {
        console.log(el);
      }
    } else if (data[0] === 'size') {
      console.log(stack.getSize());
    }
    input = readMe();
  }
};

main();
