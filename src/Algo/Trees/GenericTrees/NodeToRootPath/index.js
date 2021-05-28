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

  preOrder(treeNode = this.root) {
    if (!treeNode) {
      return;
    }
    console.log(`Node Pre ${treeNode.data}`);
    treeNode.children.forEach((child) => {
      console.log(`Edge Pre ${treeNode.data}--${child.data}`);
      this.preOrder(child);
      console.log(`Edge Post ${treeNode.data}--${child.data}`);
    });
    console.log(`Node Post ${treeNode.data}`);
  }

  levelOrder(treeNode = this.root) {
    if (!treeNode) {
      return;
    }
    const queue = [];
    queue.push(treeNode);
    while (queue.length > 0) {
      const node = queue.shift();
      process.stdout.write(`${node.data} `);
      node.children.forEach((child) => {
        queue.push(child);
      });
    }
  }
  levelOrderLineWise(treeNode = this.root) {
    if (!treeNode) {
      return;
    }

    let queue = [];
    queue.push(treeNode);
    let childQueue = [];
    while (queue.length > 0) {
      const node = queue.shift();
      process.stdout.write(`${node.data} `);
      node.children.forEach((child) => {
        childQueue.push(child);
      });
      if (queue.length === 0) {
        queue = [...childQueue];
        childQueue = [];
        console.log();
      }
    }
  }

  levelOrderLineWiseZigZag(treeNode = this.root) {
    if (!treeNode) {
      return;
    }
    let mainStack = [];
    mainStack.push(treeNode);
    let stack = [];
    let level = 1;
    while (mainStack.length > 0) {
      const node = mainStack.pop();
      process.stdout.write(`${node.data} `);
      if (level % 2 !== 0) {
        node.children.forEach((child) => {
          stack.push(child);
        });
      } else {
        for (let i = node.children.length - 1; i >= 0; i--) {
          const child = node.children[i];
          stack.push(child);
        }
      }
      if (mainStack.length === 0) {
        mainStack = [...stack];
        stack = [];
        level++;
        console.log();
      }
    }
  }

  reverseArr = (arr) => {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
    return arr;
  };

  reflect(treeNode = this.root) {
    if (!treeNode) {
      return;
    }
    treeNode.children.forEach((child) => {
      this.reflect(child);
    });
    treeNode.children.reverse();
  }

  linearize(treeNode = this.root) {
    if (!treeNode) {
      return;
    }
    if (treeNode.children.length === 0) {
      return treeNode;
    }
    const lastTail = treeNode.children[treeNode.children.length - 1];
    while (treeNode.children.length > 1) {
      const last = treeNode.children.pop();
      const prev = treeNode.children[treeNode.children.length - 1];
      const prevTail = this.linearize(prev);
      prevTail.children.push(last);
    }
    return lastTail;
  }

  nodeToRootPath(data, treeNode = this.root) {
    if (!treeNode) {
      return [];
    }

    if (treeNode.data === data) {
      const paths = [];
      paths.push(treeNode.data);
      return paths;
    }

    for (let i = 0; i < treeNode.children.length; i++) {
      const child = treeNode.children[i];
      const paths = this.nodeToRootPath(data, child);
      if (paths.length > 0) {
        paths.push(treeNode.data); // adding current root node
        return paths;
      }
    }
    return [];
  }

  getHeight(treeNode = this.root) {
    if (!treeNode) {
      return 0;
    }
    let height = 0;
    treeNode.children.forEach((child) => {
      const newHeight = this.getHeight(child);
      height = Math.max(newHeight + 1, height);
    });
    return height;
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
  const res = mybt.nodeToRootPath(+readMe());
  let result = [];
  res.forEach((el, i) => {
    if (i !== res.length - 1) {
      result.push(`${el}, `);
    } else {
      result.push(el);
    }
  });
  result.unshift('[');
  result.push(']');
  console.log(result.join(''));
};

main();
