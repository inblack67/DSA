class BTNode {
  data: number;
  left: BTNode | null;
  right: BTNode | null;
  constructor(
    data: number,
    left: BTNode | null = null,
    right: BTNode | null = null,
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BT {
  root: BTNode | null;
  constructor() {
    this.root = null;
  }

  create(arr: number[]): void {
    if (arr.length === 0) {
      return;
    }
    let i = 0;
    const queue: BTNode[] = [];
    const rootNode = new BTNode(arr[i++]);
    this.root = rootNode;
    queue.push(this.root);
    while (queue.length > 0 && i < arr.length) {
      const someNode = queue.shift() as BTNode;
      const newNode = new BTNode(arr[i++]);
      if (!someNode.left) {
        someNode.left = newNode;
      } else if (!someNode.right) {
        someNode.right = newNode;
      }
      queue.push(newNode);
    }
  }
  preOrder(node = this.root): void {
    if (!node) {
      return;
    }
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  levelOrder(node = this.root): void {
    if (!node) {
      return;
    }
    console.log(node.data);
    const queue: BTNode[] = [];
    queue.push(node);
    while (queue.length > 0) {
      const someNode = queue.shift() as BTNode;
      if (someNode.left) {
        console.log(someNode.left.data);
        queue.push(someNode.left);
      }
      if (someNode.right) {
        console.log(someNode.right.data);
        queue.push(someNode.right);
      }
    }
  }
}

const bt2 = new BT();
bt2.create([3, 43, 23, 2, 334]);
bt2.preOrder();
bt2.levelOrder();
