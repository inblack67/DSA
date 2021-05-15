const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

class MyStack_2 {
  stack;
  top;
  size;
  constructor(size) {
    this.stack = new Array(size);
    this.top = -1;
    this.size = size;
  }
  push(el) {
    if (this.isFull()) {
      console.log('Stack overflow');
      return;
    }
    this.stack[this.top + 1] = el;
    return ++this.top;
  }
  pop() {
    if (this.isEmpty()) {
      console.log('Stack underflow');
      return;
    }
    const popped = this.stack[this.top];
    delete this.stack[this.top];
    this.top--;
    return popped;
  }
  display() {
    for (let i = this.stack.length - 1; i >= 0; i--) {
      const el = this.stack[i];
      process.stdout.write(`${el} `);
    }
    console.log();
  }
  getTopElement() {
    if (this.size === 0) {
      console.log('Stack underflow');
      return;
    }
    return this.stack[this.top];
  }
  getSize() {
    return this.top + 1;
  }
  isFull() {
    return this.top === this.stack.length - 1;
  }
  isEmpty() {
    return this.top === -1;
  }
}

const main = () => {
  const stackSize = +readMe();

  const stack = new MyStack_2(stackSize);

  let input = readMe();
  while (input !== 'quit') {
    console.log(input);
    const data = input.split(' ');
    if (data[0] === 'push') {
      stack.push(+data[1]);
    } else if (data[0] === 'pop') {
      const popped = stack.pop();
      console.log(popped);
    } else if (data[0] === 'top') {
      const top = stack.getTopElement();
      console.log(top);
    } else if (data[0] === 'size') {
      const size = stack.getSize();
      console.log(size);
    } else if (data[0] === 'display') {
      stack.display();
    }
    input = readMe();
  }
};

main();
