class MyBinaryTreeNode {
  left: MyBinaryTreeNode | null;
  right: MyBinaryTreeNode | null;
  data: number;
  constructor(
    data: number,
    left: MyBinaryTreeNode | null = null,
    right: MyBinaryTreeNode | null = null,
  ) {
    this.left = left;
    this.right = right;
    this.data = data;
  }
}

class MyBinaryTree {
  root: MyBinaryTreeNode | null;
  constructor() {
    this.root = null;
  }
  create(arr: number[]) {
    const rootNode = new MyBinaryTreeNode(arr[0]);
    this.root = rootNode;
    const queue: MyBinaryTreeNode[] = [];
    queue.push(rootNode);
    let i = 1;
    while (i < arr.length && queue.length > 0) {
      const currNode = queue.shift() as MyBinaryTreeNode;
      const leftNode = new MyBinaryTreeNode(arr[i++]);
      currNode.left = leftNode;
      queue.push(leftNode);
      const rightNode = new MyBinaryTreeNode(arr[i++]);
      currNode.right = rightNode;
      queue.push(leftNode);
    }
  }
  preOrder(treeNode: MyBinaryTreeNode | null = this.root) {
    if (!treeNode) {
      return;
    }
    this.preOrder(treeNode.left);
    console.log(treeNode.data);
    this.preOrder(treeNode.right);
  }
}

const mybt = new MyBinaryTree();
mybt.create([1, 2, 3]);
mybt.preOrder();
