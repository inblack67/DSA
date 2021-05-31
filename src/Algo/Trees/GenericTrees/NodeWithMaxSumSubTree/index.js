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
  maxSubtreeSumNode;
  maxSubtreeSum;

  constructor() {
    this.root = null;
    this.size = 0;
    this.maxSubtreeSumNode = null;
    this.maxSubtreeSum = 0;
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

  nodeWithMaxSubtreeSum(treeNode = this.root) {
    if (!treeNode) {
      return null;
    }
    let sum = 0;
    treeNode.children.forEach((child) => {
      const subtreeSum = this.nodeWithMaxSubtreeSum(child);
      sum += subtreeSum;
    });

    sum += treeNode.data;

    if (sum > this.maxSubtreeSum) {
      this.maxSubtreeSum = sum;
      this.maxSubtreeSumNode = treeNode;
    }

    return sum;
  }

  getMaxSubTreeSumData() {
    return {
      node: this.maxSubtreeSumNode,
      data: this.maxSubtreeSum,
    };
  }
}

const main = () => {
  const arrSize = +readMe();
  const arr = readMe()
    .split(' ')
    .map((el) => +el);
  const mybt = new MyGenericTree();
  mybt.create(arr);
  mybt.nodeWithMaxSubtreeSum();
  console.log(`${mybt.maxSubtreeSumNode.data}@${mybt.maxSubtreeSum}`);
};

main();
