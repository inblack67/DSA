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

  constructor() {
    this.root = null;
    this.size = 0;
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

  display(treeNode = this.root) {
    if (!treeNode) {
      return;
    }
    let res = `${treeNode.data} -> `;
    treeNode.children.forEach((child) => {
      res += `${child.data}, `;
    });
    res += '.';
    console.log(res);
    treeNode.children.forEach((child) => {
      this.display(child);
    });
  }

  getMax(treeNode = this.root) {
    if (!treeNode) {
      return null;
    }

    let max = Number.MIN_SAFE_INTEGER;

    // faith => all children of root will give their max
    treeNode.children.forEach((child) => {
      const maxCandidate = this.getMax(child);
      max = Math.max(max, maxCandidate);
    });

    // now comparing max of all children, with root
    max = Math.max(treeNode.data, max);

    return max;
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
  const mybt = new MyGenericTree();
  mybt.create(arr);
  console.log(mybt.getMax());
};

main();
