const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

class TwoStacksInArray {
  arr;
  size1;
  size2;
  constructor(size) {
    this.arr = new Array(size);
    this.size1 = 0;
    this.size2 = 0;
  }
  push1(el) {
    if (this.isFull()) {
      console.log(`Stack overflow`);
      return null;
    }
    const index = this.size1;
    this.arr[index] = el;
    return ++this.size1;
  }
  push2(el) {
    if (this.isFull()) {
      console.log(`Stack overflow`);
      return null;
    }
    const index = this.arr.length - 1 - this.size2;
    this.arr[index] = el;
    return ++this.size2;
  }
  top1() {
    if (this.isEmpty()) {
      console.log(`Stack underflow`);
      return null;
    }
    const index = this.size1 - 1;
    return this.arr[index];
  }
  top2() {
    if (this.isEmpty()) {
      console.log(`Stack underflow`);
      return null;
    }
    const index = this.arr.length - this.size2;
    return this.arr[index];
  }
  pop1() {
    if (this.isEmpty()) {
      console.log(`Stack underflow`);
      return null;
    }
    const deletedEl = this.arr[this.size1 - 1];
    delete this.arr[this.size1 - 1];
    this.size1--;
    return deletedEl;
  }
  pop2() {
    if (this.isEmpty()) {
      console.log(`Stack underflow`);
      return null;
    }
    const deletedEl = this.arr[this.arr.length - this.size2];
    delete this.arr[this.arr.length - this.size2];
    this.size2--;
    return deletedEl;
  }
  getSize1() {
    return this.size1;
  }
  getSize2() {
    return this.size2;
  }
  isFull() {
    const sizes = this.size1 + this.size2;
    if (sizes === this.arr.length) {
      return true;
    }
    return false;
  }
  isEmpty() {
    const sizes = this.size1 + this.size2;
    if (sizes === 0) {
      return true;
    }
    return false;
  }
  display() {
    console.log(this.arr);
  }
}

const main = () => {
  const arrSize = +readMe();
  const stack = new TwoStacksInArray(arrSize);
  let input = readMe();
  while (input !== 'quit') {
    const data = input.split(' ').map((el) => el.trim());
    if (data[0] === 'push1') {
      stack.push1(+data[1]);
    } else if (data[0] === 'push2') {
      stack.push2(+data[1]);
    } else if (data[0] === 'pop1') {
      const removedEl = stack.pop1();
      if (removedEl !== null && removedEl !== undefined) {
        console.log(removedEl);
      }
    } else if (data[0] === 'pop2') {
      const removedEl = stack.pop2();
      if (removedEl !== null && removedEl !== undefined) {
        console.log(removedEl);
      }
    } else if (data[0] === 'top1') {
      const el = stack.top1();
      if (el !== null && el !== undefined) {
        console.log(el);
      }
    } else if (data[0] === 'top2') {
      const el = stack.top2();
      if (el !== null && el !== undefined) {
        console.log(el);
      }
    } else if (data[0] === 'size1') {
      console.log(stack.getSize1());
    } else if (data[0] === 'size2') {
      console.log(stack.getSize2());
    }
    input = readMe();
  }
};

main();
