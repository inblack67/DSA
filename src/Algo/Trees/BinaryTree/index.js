const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

class MyBinaryTreeNode {
  left;
  right;
  data;
  constructor(data, left, right) {
    this.left = left;
    this.right = right;
    this.data = data;
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
    const rootNode = new MyBinaryTreeNode(arr[0]);
    this.root = rootNode;
    this.size++;
    const queue = [];
    queue.push(rootNode);
    let i = 1;
    while (i < arr.length && queue.length > 0) {
      const currNode = queue.shift();
      if (i < arr.length) {
        const leftNode = new MyBinaryTreeNode(arr[i++]);
        currNode.left = leftNode;
        this.size++;
        queue.push(leftNode);
      }
      if (i < arr.length) {
        const rightNode = new MyBinaryTreeNode(arr[i++]);
        currNode.right = rightNode;
        this.size++;
        queue.push(rightNode);
      }
    }
  }
  preOrder(treeNode = this.root) {
    if (!treeNode) {
      return;
    }
    this.preOrder(treeNode.left);
    console.log(treeNode.data);
    this.preOrder(treeNode.right);
  }
  getSize() {
    return this.size;
  }
}

const main = () => {
  const arrSize = +readMe();
  const arr = readMe()
    .split(' ')
    .map((el) => +el);
  const mybt = new MyBinaryTree();
  mybt.create(arr);
  console.log(mybt.getSize());
};

main();
