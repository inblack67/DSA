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

  // immediate but same parent of two nodes
  lowestCommonAncestor(data1, data2, treeNode = this.root) {
    if (!treeNode) {
      return null;
    }
    // top to bottom => last equal parent will be the ancestor
    const path1 = this.nodeToRootPath(data1, treeNode);
    const path2 = this.nodeToRootPath(data2, treeNode);
    let i = path1.length - 1; // from root to bottoom (root is at the right most of the array)
    let j = path2.length - 1;
    while (i >= 0 && j >= 0 && path1[i] === path2[j]) {
      i--;
      j--;
    }
    i++;
    j++;
    return path1[i];
  }

  distanceBetween2Nodes(data1, data2, treeNode = this.root) {
    if (!treeNode) {
      return null;
    }

    // top to bottom => last equal parent will be the ancestor
    const path1 = this.nodeToRootPath(data1, treeNode);
    const path2 = this.nodeToRootPath(data2, treeNode);
    let i = path1.length - 1; // from root to bottoom (root is at the right most of the array)
    let j = path2.length - 1;
    while (i >= 0 && j >= 0 && path1[i] === path2[j]) {
      i--;
      j--;
    }
    i++;
    j++;
    return i + j;
  }

  areSimilar(treeNode1 = this.root, treeNode2 = this.root) {
    if (!treeNode1 && !treeNode2) {
      return null;
    }
    if (!treeNode1 || !treeNode2) {
      return null;
    }
    if (treeNode1.children.length !== treeNode2.children.length) {
      return false;
    }
    for (let i = 0; i < treeNode1.children.length; i++) {
      const node1 = treeNode1.children[i];
      const node2 = treeNode2.children[i];
      if (!this.areSimilar(node1, node2)) {
        return false;
      }
    }
    return true;
  }

  areMirror(treeNode1, treeNode2) {
    if ((!treeNode1 && !treeNode2) || !treeNode1 || !treeNode2) {
      return null;
    }
    if (treeNode1.children.length !== treeNode2.children.length) {
      return false;
    }

    let j = treeNode2.children.length - 1;
    for (let i = 0; i < treeNode1.children.length; i++) {
      const child1 = treeNode1.children[i];
      const child2 = treeNode2.children[j--];
      const res = this.areMirror(child1, child2);
      if (!res) {
        return false;
      }
    }
    return true;
  }

  isSymmetric(treeNode1 = this.root, treeNode2 = this.root) {
    if ((!treeNode1 && !treeNode2) || !treeNode1 || !treeNode2) {
      return null;
    }
    return this.areMirror(treeNode1, treeNode2);
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
  const arrSize1 = +readMe();
  const arr1 = readMe()
    .split(' ')
    .map((el) => +el);
  const mybt1 = new MyGenericTree();
  mybt1.create(arr1);
  console.log(mybt1.isSymmetric(mybt1.root, mybt1.root));
};

main();
