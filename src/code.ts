class GTNode {
  data: number;
  children: GTNode[];
  constructor(data: number) {
    this.data = data;
    this.children = [];
  }
}

class GT {
  private root: GTNode | null;
  private size: number;
  constructor() {
    this.root = null;
    this.size = 0;
  }
  create(edges: number[]) {
    const stack: GTNode[] = [];
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
  preOrder(node = this.root): void {
    if (!node) {
      return;
    }
    console.log(node.data);
    node.children.forEach((child) => {
      this.preOrder(child);
    });
  }
  postOrder(node = this.root): void {
    if (!node) {
      return;
    }
    node.children.forEach((child) => {
      this.postOrder(child);
    });
    console.log(node.data);
  }
  getSize(node = this.root): number {
    if (!node) {
      return 0;
    }
    let res = 0;
    node.children.forEach((el) => {
      res += this.getSize(el);
    });
    return res + 1;
  }
  getMax(node = this.root) {
    if (!node) {
      return Number.MIN_SAFE_INTEGER;
    }
    let max = Number.MIN_SAFE_INTEGER;
    node.children.forEach((el) => {
      const maxSoFar = this.getMax(el);
      max = Math.max(maxSoFar, max);
    });
    max = Math.max(node.data, max);
    return max;
  }

  getHeight(node = this.root): number {
    if (!node) {
      return 0;
    }
    let ht = 0;
    node.children.forEach((child) => {
      const htSoFar = this.getHeight(child);
      ht = Math.max(htSoFar + 1, ht);
    });
    return ht;
  }

  levelOrder(node = this.root): void {
    if (!node) {
      return;
    }
    const queue: GTNode[] = [];
    queue.push(node);
    while (queue.length > 0) {
      const someNode = queue.shift() as GTNode;
      console.log(someNode.data);
      someNode.children.forEach((el) => {
        queue.push(el);
      });
    }
  }

  levelOrderLineWise(root = this.root) {
    if (!root) {
      return;
    }
    const queue: GTNode[] = [];
    queue.push(root);
    while (queue.length > 0) {
      const node = queue.shift() as GTNode;
      console.log(node.data);
      node.children.forEach((child) => {
        queue.push(child);
      });
    }
  }

  mirror(root = this.root) {
    if (!root) {
      return;
    }
    root.children.forEach((child) => {
      this.mirror(child);
    });
    root.children.reverse();
  }
  removeLeaves(root = this.root) {
    if (!root) {
      return;
    }
    root.children.forEach((el) => {
      if (el.children.length === 0) {
        root.children = root.children.filter((child) => child !== el);
      }
      this.removeLeaves(el);
    });
  }

  getTail(node: GTNode) {
    let res = node;
    while (res.children.length === 1) {
      res = res.children[0];
    }
    return res;
  }

  // linearize(node = this.root) {
  //   if (!node) {
  //     return;
  //   }
  //   node.children.forEach((child) => {
  //     this.linearize(child);
  //   });
  //   while (node.children.length > 1) {
  //     const lastChild = node.children.pop() as GTNode;
  //     const secondLastChild = node.children[0];
  //     const secondLastTail = this.getTail(secondLastChild);
  //     secondLastTail.children.push(lastChild);
  //   }
  // }

  display(node = this.root): void {
    if (!node) {
      return;
    }
    console.log(node.data);
    node.children.forEach((child) => {
      console.log(child.data);
    });
    node.children.forEach((child) => {
      this.display(child);
    });
  }
  find(data: number, node = this.root): boolean {
    if (!node) {
      return false;
    } else if (node.data === data) {
      return true;
    }
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      const res = this.find(data, child);
      if (res) {
        return true;
      }
    }
    return false;
  }
  nodeToRootPath(data: number, node = this.root): number[] {
    if (!node) {
      return [];
    }
    if (node.data === data) {
      const paths: number[] = [];
      paths.push(node.data);
      return paths;
    }
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      const res = this.nodeToRootPath(data, child);
      if (res.length > 0) {
        res.push(node.data);
        return res;
      }
    }
    return [];
  }
  lowestCommonAncestor() {}
}

const gt = new GT();
// gt.create([10, 20, -1, 30, 50, -1, 60, -1, -1, 40, -1, -1]);
// gt.preOrder();
// gt.postOrder();
// console.log(gt.getSize());
// console.log(gt.getMax());
// console.log(gt.getHeight());
// gt.create([
//   10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 11, 0, -1, 1, 20, -1, -1, 90, -1,
//   -1, 40, 100, -1, -1, -1,
// ]);
gt.create([
  10, 20, 50, -1, 60, -1, -1, 30, 70, -1, 80, 110, -1, 120, -1, -1, 90, -1, -1,
  40, 100, -1, -1, -1,
]);
// gt.levelOrder();
// gt.levelOrderLineWise();
// gt.removeLeaves();
// gt.display();
// console.log(gt.find(100));
console.log(gt.nodeToRootPath(120));
