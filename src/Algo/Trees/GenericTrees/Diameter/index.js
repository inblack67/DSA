const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

class MyGenericTreeNode {
  children;
  data;
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

class MyGenericTree {
  root;
  size;
  diameter;

  constructor() {
    this.root = null;
    this.size = 0;
    this.diameter = 0;
  }

  create(arr) {
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (el === -1) {
        if (stack.length > 0) {
          stack.pop();
        }
      } else {
        const newNode = new MyGenericTreeNode(el);
        if (stack.length === 0) {
          this.root = newNode;
        } else {
          const top = stack[stack.length - 1];
          // pop
          top.children.push(newNode);
        }
        stack.push(newNode);
        this.size++;
      }
    }
  }

  calculateDiameter(treeNode = this.root) {
    if (!treeNode) {
      return null;
    }
    let maxHeight = -1;
    let secondMaxHeight = -1;
    treeNode.children.forEach((child) => {
      const height = this.calculateDiameter(child);
      if (height > maxHeight) {
        secondMaxHeight = maxHeight;
        maxHeight = height;
      } else if (height > secondMaxHeight) {
        secondMaxHeight = height;
      }
    });

    const candidate = secondMaxHeight + maxHeight + 2; // through me => 2 edges
    if (candidate > this.diameter) {
      this.diameter = candidate;
    }

    maxHeight += 1;
    return maxHeight;
  }

  getDiameter() {
    return this.diameter;
  }
}

const main = () => {
  const arrSize = +readMe();
  const arr = readMe()
    .split(' ')
    .map((el) => +el);
  const mybt = new MyGenericTree();
  mybt.create(arr);
  mybt.calculateDiameter();
  console.log(mybt.getDiameter());
};

main();
