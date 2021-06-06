const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

class MyBinaryTreeNode {
  data;
  left;
  right;
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Pair {
  someNode;
  // 0 -> left child to be added
  // 1 -> right
  // 2 -> pop
  state;
  constructor(someNode, state) {
    this.someNode = someNode;
    this.state = state;
  }
}

class MyBinaryTree {
  root;
  size;
  constructor() {
    this.root = null;
    this.size = 0;
  }
  create(arr) {
    const newNode = new MyBinaryTreeNode(arr[0]);
    const pair = new Pair(newNode);
    this.root = newNode;
    this.size++;
    let i = 1;
    const stack = [];
    stack.push(pair);
    while (stack.length > 0) {
      const stackTop = stack[stack.length - 1];
      if (stackTop.state === 0) {
        // add left child
        const el = arr[i++];
        if (el !== null) {
          const newNode = new MyBinaryTreeNode(el);
          const newPair = new Pair(newNode);
          stackTop.someNode.left = newNode;
          stack.push(newPair);
          this.size++;
        }
        stackTop.state++;
      } else if (stackTop.state === 1) {
        // add right child
        const el = arr[i++];
        if (el !== null) {
          const newNode = new MyBinaryTreeNode(el);
          const newPair = new Pair(newNode);
          stackTop.someNode.right = newNode;
          stack.push(newPair);
          this.size++;
        }
        stackTop.state++;
      } else {
        // i === 2 => pop
        stack.pop();
      }
    }
  }

  preOrder(rootNode = this.root) {
    if (rootNode === null) {
      return;
    }
    console.log(rootNode.data);
    this.preOrder(rootNode.left);
    this.preOrder(rootNode.right);
  }

  calculateSize(rootNode = this.root) {
    if (!rootNode) {
      return 0;
    }
    const lhsSize = this.calculateSize(rootNode.left);
    const rhsSize = this.calculateSize(rootNode.right);
    return lhsSize + rhsSize + 1;
  }

  calculateSum(rootNode = this.root) {
    if (!rootNode) {
      return 0;
    }
    const lhsSum = this.calculateSize(rootNode.left);
    const rhsSum = this.calculateSize(rootNode.right);
    return lhsSum + rhsSum + rootNode.data;
  }

  get getSize() {
    return this.size;
  }
}

const main = () => {
  const size = +readMe();
  const arr = readMe()
    .trim()
    .split(' ')
    .map((el) => {
      if (el.trim() === 'n') {
        return null;
      } else {
        return +el.trim();
      }
    });
  const mybt = new MyBinaryTree();
  mybt.create(arr);
  console.log(mybt.getSize);
  //   console.log(mybt.calculateSize());
  //   console.log(mybt.calculateSum());
};

main();
