const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

class TwoStacksInArray {
  arr;
  top1;
  top2;
  constructor(size) {
    this.arr = new Array(size);
    this.top1 = -1;
    this.top2 = this.arr.length;
  }
  push1(el) {
    if (this.top2 === this.top1 + 1) {
      console.log(`Stack overflow`);
      return null;
    }
    this.arr[++this.top1] = el;
  }
  push2(el) {
    if (this.top2 === this.top1 + 1) {
      console.log(`Stack overflow`);
      return null;
    }
    this.arr[--this.top2] = el;
  }
  getTop1() {
    if (this.getSize1() === 0) {
      console.log(`Stack underflow`);
      return null;
    }
    return this.arr[this.top1];
  }
  getTop2() {
    if (this.getSize2() === 0) {
      console.log(`Stack underflow`);
      return null;
    }
    return this.arr[this.top2];
  }
  pop1() {
    if (this.getSize1() === 0) {
      console.log(`Stack underflow`);
      return null;
    }
    const deletedEl = this.arr[this.top1];
    delete this.arr[this.top1];
    this.top1--;
    return deletedEl;
  }
  pop2() {
    if (this.getSize2() === 0) {
      console.log(`Stack underflow`);
      return null;
    }
    const deletedEl = this.arr[this.top2];
    delete this.arr[this.top2];
    this.top2++;
    return deletedEl;
  }
  getSize1() {
    return this.top1 + 1;
  }
  getSize2() {
    return this.arr.length - this.top2;
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
      const el = stack.getTop1();
      if (el !== null && el !== undefined) {
        console.log(el);
      }
    } else if (data[0] === 'top2') {
      const el = stack.getTop2();
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
