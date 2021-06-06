class MyBinaryTreeNode {
  data: number;
  left: MyBinaryTreeNode | null;
  right: MyBinaryTreeNode | null;
  constructor(
    data: number,
    left: MyBinaryTreeNode | null = null,
    right: MyBinaryTreeNode | null = null,
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Pair {
  someNode: MyBinaryTreeNode;
  // 0 -> left child to be added
  // 1 -> right
  // 2 -> pop
  state: number;
  constructor(someNode: MyBinaryTreeNode, state = 0) {
    this.someNode = someNode;
    this.state = state;
  }
}

class MyBinaryTree {
  private root: MyBinaryTreeNode | null;
  private size: number;
  constructor() {
    this.root = null;
    this.size = 0;
  }
  create(arr: (number | null)[]): void {
    const newNode = new MyBinaryTreeNode(arr[0] as number);
    const pair = new Pair(newNode);
    this.root = newNode;
    this.size++;
    let i = 1;
    const stack: Pair[] = [];
    stack.push(pair);
    while (stack.length > 0) {
      const stackTop = stack[stack.length - 1];
      if (stackTop.state === 0) {
        // add left child
        const el = arr[i++];
        if (el !== null) {
          const newNode = new MyBinaryTreeNode(el);
          const newPair = new Pair(newNode);
          stackTop.someNode.left = newNode;
          stack.push(newPair);
          this.size++;
        }
        stackTop.state++;
      } else if (stackTop.state === 1) {
        // add right child
        const el = arr[i++];
        if (el !== null) {
          const newNode = new MyBinaryTreeNode(el);
          const newPair = new Pair(newNode);
          stackTop.someNode.right = newNode;
          stack.push(newPair);
          this.size++;
        }
        stackTop.state++;
      } else {
        // i === 2 => pop
        stack.pop();
      }
    }
  }

  preOrder(rootNode = this.root): void {
    if (rootNode === null) {
      return;
    }
    console.log(rootNode.data);
    this.preOrder(rootNode.left);
    this.preOrder(rootNode.right);
  }

  calculateSize(rootNode = this.root): number {
    if (!rootNode) {
      return 0;
    }
    const lhsSize = this.calculateSize(rootNode.left);
    const rhsSize = this.calculateSize(rootNode.right);
    return lhsSize + rhsSize + 1;
  }

  get getSize() {
    return this.size;
  }
}

const mybt = new MyBinaryTree();
mybt.create([
  50,
  25,
  12,
  null,
  null,
  37,
  30,
  null,
  null,
  null,
  75,
  62,
  null,
  70,
  null,
  null,
  87,
  null,
  null,
]);
mybt.preOrder();
console.log(mybt.getSize);
console.log(mybt.calculateSize());
