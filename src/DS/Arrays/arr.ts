class MyArray {
  arr: number[];
  constructor(arr: number[]) {
    this.arr = arr;
  }
  display() {
    return this.arr;
  }
  reverseArr = (copy = this.arr) => {
    let i = 0;
    let j = copy.length - 1;
    while (i < j) {
      const temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
      i++;
      j--;
    }
    return copy;
  };
  length() {
    return this.arr.length;
  }
  pushAtLast(el: number): number {
    return this.arr.push(el); // returns new length
  }
  popLast(): number | undefined {
    return this.arr.pop(); // returns deleted el
  }
  popFirst(): number | undefined {
    return this.arr.shift(); // returns deleted el
  }
  pushAtFirst(el: number) {
    return this.arr.unshift(el); // returns new length
  }
  pushAtIndex(el: number, index: number) {
    if (index < 0 || index >= this.arr.length) {
      throw new Error('Invalid Index');
    }

    if (index === 0) {
      return this.pushAtFirst(el);
    }

    if (index === this.arr.length - 1) {
      return this.pushAtLast(el);
    }

    // go at index, delete none, insert el on that index
    this.arr.splice(index, 0, el); // changes the original one
    return this.arr.length;
  }
  popAtIndex(index: number) {
    // [1,2,3,4,5]
    if (index < 0 || index >= this.arr.length) {
      throw new Error('Invalid Index');
    }

    if (index === 0) {
      return this.popFirst();
    }

    if (index === this.arr.length - 1) {
      return this.popLast();
    }

    // go at index, delete one
    this.arr.splice(index, 1); // changes the original one
    return this.arr.length;
  }
}

const arr = [1, 2, 3, 4, 5];
const obj1 = new MyArray(arr);
// console.log(obj1.pushAtLast(6));
// console.log(obj1.pushAtLast(6));
// console.log(obj1.popLast());
// console.log(obj1.popFirst());
// console.log(obj1.pushAtIndex(10, 3));
console.log(obj1.popAtIndex(1));
// console.log(obj1.length());
console.log(obj1.display());
obj1.reverseArr();
console.log(obj1.display());
