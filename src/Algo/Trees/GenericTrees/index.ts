class MyGenericTreeNode {
  children: MyGenericTreeNode[];
  data: number;
  constructor(data: number) {
    this.data = data;
    this.children = [];
  }
}

class MyGenericTree {
  private root: MyGenericTreeNode | null;
  private size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  create(arr: number[]): void {
    const stack: MyGenericTreeNode[] = [];
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

  display(treeNode: MyGenericTreeNode | null = this.root): void {
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

  preOrder(treeNode: MyGenericTreeNode | null = this.root): void {
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

  levelOrder(treeNode: MyGenericTreeNode | null = this.root): void {
    if (!treeNode) {
      return;
    }
    const queue: MyGenericTreeNode[] = [];
    queue.push(treeNode);
    while (queue.length > 0) {
      const node = queue.shift() as MyGenericTreeNode;
      // console.log(node.data);
      process.stdout.write(`${node.data} `);
      node.children.forEach((child) => {
        queue.push(child);
      });
    }
  }

  levelOrderLineWise(treeNode: MyGenericTreeNode | null = this.root): void {
    if (!treeNode) {
      return;
    }
    let queue: MyGenericTreeNode[] = [];
    queue.push(treeNode);
    let childQueue: MyGenericTreeNode[] = [];
    while (queue.length > 0) {
      const node = queue.shift() as MyGenericTreeNode;
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

  levelOrderLineWiseZigZag(
    treeNode: MyGenericTreeNode | null = this.root,
  ): void {
    if (!treeNode) {
      return;
    }
    let mainStack: MyGenericTreeNode[] = [];
    mainStack.push(treeNode);
    let stack: MyGenericTreeNode[] = [];
    let level = 1;
    while (mainStack.length > 0) {
      const node = mainStack.pop() as MyGenericTreeNode;
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

  // invert, mirror etc
  reflect(treeNode: MyGenericTreeNode | null = this.root) {
    if (!treeNode) {
      return;
    }
    treeNode.children.forEach((child) => {
      this.reflect(child);
    });
    treeNode.children.reverse();
  }

  removeLeaves(treeNode: MyGenericTreeNode | null = this.root) {
    if (!treeNode) {
      return;
    }

    treeNode.children.forEach((child) => {
      if (child.children.length === 0) {
        treeNode.children = treeNode.children.filter((node) => node !== child);
      }
    });

    treeNode.children.forEach((child) => {
      this.removeLeaves(child);
    });
  }

  linearize(
    treeNode: MyGenericTreeNode | null = this.root,
  ): MyGenericTreeNode | void {
    if (!treeNode) {
      return;
    }
    if (treeNode.children.length === 0) {
      return treeNode;
    }
    const lastTail = treeNode.children[treeNode.children.length - 1];
    while (treeNode.children.length > 1) {
      const last = treeNode.children.pop() as MyGenericTreeNode;
      const prev = treeNode.children[treeNode.children.length - 1];
      const prevTail = this.linearize(prev) as MyGenericTreeNode;
      prevTail.children.push(last);
    }
    return lastTail;
  }

  find(data: number, treeNode: MyGenericTreeNode | null = this.root): boolean {
    if (!treeNode) {
      return false;
    }
    if (treeNode.data === data) {
      return true;
    }

    for (let i = 0; i < treeNode.children.length; i++) {
      const child = treeNode.children[i];
      const res = this.find(data, child);
      if (res) {
        return true;
      }
    }

    return false;
  }

  nodeToRootPath(
    data: number,
    treeNode: MyGenericTreeNode | null = this.root,
  ): number[] {
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

  getMax(treeNode: MyGenericTreeNode | null = this.root): number | null {
    if (!treeNode) {
      return null;
    }

    let max: number = Number.MIN_SAFE_INTEGER;

    // faith => all children of root will give their max
    treeNode.children.forEach((child) => {
      const maxCandidate = this.getMax(child) as number;
      max = Math.max(max, maxCandidate);
    });

    // now comparing max of all children, with root
    max = Math.max(treeNode.data, max);

    return max;
  }
  getHeight(treeNode: MyGenericTreeNode | null = this.root) {
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
  getSize(): number {
    return this.size;
  }
}

const mygt = new MyGenericTree();
// mygt.create([10, 20, -1, 30, 50, -1, 60, -1, -1, 40, -1, -1]);
mygt.create([
  10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1,
  40, 100, -1, -1, -1,
]);
// mygt.reflect();
// mygt.linearize();
// console.log(mygt.find(10));
console.log(mygt.nodeToRootPath(120));
mygt.display();
// mygt.preOrder();
// mygt.levelOrder();
// mygt.levelOrderLineWise();
// console.log(mygt.getMax());
// console.log(mygt.getHeight());
// console.log(mygt.getSize());