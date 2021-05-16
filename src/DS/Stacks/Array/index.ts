class Stack {
  private stack: number[];
  private top: number;
  private size: number;
  private isDynamic: boolean;
  constructor(size?: number) {
    this.stack = size ? new Array(size) : [];
    this.isDynamic = size ? false : true;
    this.top = -1;
    this.size = 0;
  }
  push(el: number): number {
    if (this.size === this.stack.length && !this.isDynamic) {
      console.log(`Stack overflow`);
      return this.size;
    }
    this.stack[++this.top] = el;
    this.size++;
    return this.size;
  }
  pop(): number {
    if (this.size === 0) {
      console.log(`Stack underflow`);
      return -1;
    }
    const popped = this.stack[this.top];
    delete this.stack[this.top--];
    this.size--;
    return popped;
  }
  peek(): number {
    if (this.size === 0) {
      return -1;
    }
    return this.stack[this.top];
  }
  getSize(): number {
    return this.size;
  }
  display(): void {
    for (let i = 0; i < this.size; i++) {
      console.log(this.stack[i]);
    }
  }
}

const stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.getSize());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
stack.display();
