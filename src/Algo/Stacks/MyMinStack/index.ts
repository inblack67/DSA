class MyStack_2 {
  stack: number[];
  fillSize: number;
  top: number;
  stackSize?: number;
  constructor(stackSize?: number) {
    this.stack = stackSize ? new Array(stackSize) : [];
    this.top = -1;
    this.fillSize = 0;
    if (stackSize) {
      this.stackSize = stackSize;
    }
  }
  push(el: number): void {
    if (this.stackSize && this.stack.length === this.fillSize) {
      throw new Error('Stack overflow');
    }
    this.stack[++this.top] = el;
    this.fillSize++;
  }
  peek(): number {
    if (this.top === -1) {
      throw new Error('Stack underflow');
    }
    return this.stack[this.top];
  }
  pop(): number {
    if (this.top === -1) {
      throw new Error('Stack underflow');
    }
    const popped = this.stack[this.top--];
    this.fillSize--;
    return popped;
  }
  display(): void {
    if (this.top === -1) {
      return;
    }
    let pointer = this.top;
    while (pointer !== -1) {
      console.log(this.stack[pointer--]);
    }
  }
}
// const s2 = new MyStack_2();
// s2.push(1);
// s2.push(2);
// s2.push(3);
// s2.push(4);
// s2.push(6);
// s2.push(5);
// // console.log(s2.pop());
// console.log(s2.peek());
// s2.display();

class MyMinStack {
  stack: MyStack_2;
  minStack: MyStack_2;
  constructor() {
    this.stack = new MyStack_2();
    this.minStack = new MyStack_2();
  }
  push(el: number): void {
    if (this.minStack.top === -1 || el < this.minStack.peek()) {
      this.minStack.push(el);
    } else if (el > this.minStack.peek()) {
      while (el > this.minStack.peek()) {
        this.stack.push(this.minStack.pop());
      }
      this.minStack.push(el);
      while (this.stack.top !== -1) {
        this.minStack.push(this.stack.pop());
      }
    }
  }
  pop(): number {
    return this.minStack.pop();
  }
  peek() {
    return this.minStack.peek();
  }
  display() {
    this.minStack.display();
  }
}

const myMinStack = new MyMinStack();
myMinStack.push(5);
myMinStack.push(2);
myMinStack.push(1);
myMinStack.push(3);
myMinStack.push(4);
myMinStack.display();
console.log(myMinStack.pop());
console.log(myMinStack.pop());
console.log(myMinStack.pop());
console.log(myMinStack.pop());
console.log(myMinStack.pop());
