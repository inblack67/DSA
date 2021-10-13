class TreeNode2 {
  val: number;
  left: TreeNode2 | null;
  right: TreeNode2 | null;
  constructor(val?: number, left?: TreeNode2 | null, right?: TreeNode2 | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class Tree2 {
  private root: TreeNode2 | null;
  constructor() {
    this.root = null;
  }
  create(arr: (number | null)[]): void {
    const stack: TreeNode2[] = [];
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (el === null) {
        stack.pop();
      } else {
        const newNode = new TreeNode2(el);
        if (stack.length === 0) {
          this.root = newNode;
        } else {
          const someNode = stack[stack.length - 1];

          if (newNode.left === null) {
            newNode.left = someNode;
          } else if (newNode.right === null) {
            newNode.right = someNode;
          }
        }
        stack.push(newNode);
      }
    }
  }
  preOrder(node: TreeNode2 | null): void {
    if (!node) {
      return;
    }
    console.log(node.val);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  levelOrder(node: TreeNode2 | null): number[][] {
    if (!node) {
      return [];
    }
    const res: number[][] = [];
    res.push([node.val]);
    const queue: TreeNode2[] = [];
    queue.push(node);
    while (queue.length > 0) {
      const someNode = queue.shift() as TreeNode2;
      const children: number[] = [];
      if (someNode.left) {
        children.push(someNode.left.val);
        queue.push(someNode.left);
      }
      if (someNode.right) {
        children.push(someNode.right.val);
        queue.push(someNode.right);
      }
      if (children.length > 0) {
        res.push(children);
      }
    }

    return res;
  }
  get rootNode() {
    return this.root;
  }
}

const tree2 = new Tree2();
tree2.create([1, 2, 3, 4, null, null, 5]);
console.log(tree2.levelOrder(tree2.rootNode));
tree2.preOrder(tree2.rootNode);

const levelOrder = (node: TreeNode2 | null): number[][] => {
  if (!node) {
    return [];
  }
  const res: number[][] = [];
  res.push([node.val]);
  const queue: TreeNode2[] = [];
  queue.push(node);
  while (queue.length > 0) {
    const someNode = queue.shift() as TreeNode2;
    const children: number[] = [];
    if (someNode.left) {
      children.push(someNode.left.val);
      queue.push(someNode.left);
    }
    if (someNode.right) {
      children.push(someNode.right.val);
      queue.push(someNode.right);
    }
    if (children.length > 0) {
      res.push(children);
    }
  }

  return res;
};
