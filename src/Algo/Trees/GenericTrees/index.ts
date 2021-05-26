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
  private root: MyBinaryTreeNode | null;
  private size: number;
  constructor() {
    this.root = null;
    this.size = 0;
  }
  create(arr: number[]) {
    const rootNode = new MyBinaryTreeNode(arr[0]);
    this.root = rootNode;
    this.size++;
    const queue: MyBinaryTreeNode[] = [];
    queue.push(rootNode);
    let i = 1;
    while (i < arr.length && queue.length > 0) {
      const currNode = queue.shift() as MyBinaryTreeNode;
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
  preOrder(treeNode: MyBinaryTreeNode | null = this.root) {
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

const mybt = new MyBinaryTree();
mybt.create([1, 2, 3]);
mybt.preOrder();
console.log(mybt.getSize());
