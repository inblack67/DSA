const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

class GTNode {
  data;
  children;
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

class GT {
  root;
  size;
  constructor() {
    this.root = null;
    this.size = 0;
  }
  create(edges) {
    const stack = [];
    edges.forEach((el) => {
      if (el === -1) {
        stack.pop();
      } else {
        const node = new GTNode(el);
        if (stack.length > 0) {
          const top = stack[stack.length - 1];
          top.children.push(node);
        } else {
          this.root = node;
        }
        stack.push(node);
      }
    });
  }
  levelOrderLineWise(root = this.root) {
    if (!root) {
      return;
    }
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
      const node = queue.shift();
      // console.log(node.data);
      process.stdout.write(node.data);
      node.children.forEach((child) => {
        queue.push(child);
      });
    }
  }
}

const main = () => {
  const size = +readMe();
  const arr = readMe()
    .split(' ')
    .map((el) => +el);
  const gt = new GT();
  gt.create(arr);
  gt.levelOrderLineWise();
};

main();
