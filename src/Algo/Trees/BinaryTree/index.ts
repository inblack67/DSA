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
  private nodeToRootPath: MyBinaryTreeNode[];
  constructor() {
    this.root = null;
    this.size = 0;
    this.nodeToRootPath = [];
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

  inOrder(rootNode = this.root): void {
    if (rootNode === null) {
      return;
    }
    this.inOrder(rootNode.left);
    console.log(rootNode.data);
    this.inOrder(rootNode.right);
  }

  postOrder(rootNode = this.root): void {
    if (rootNode === null) {
      return;
    }
    this.postOrder(rootNode.left);
    this.postOrder(rootNode.right);
    console.log(rootNode.data);
  }

  levelOrder(treeNode = this.root): void {
    if (!treeNode) {
      return;
    }
    const queue: MyBinaryTreeNode[] = [];
    queue.push(treeNode);
    while (queue.length > 0) {
      const numberOfNodesInALevel = queue.length;
      for (let i = 0; i < numberOfNodesInALevel; i++) {
        const node = queue.shift() as MyBinaryTreeNode;
        console.log(node.data);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
  }

  calculateSize(rootNode = this.root): number {
    if (!rootNode) {
      return 0;
    }
    const lhsSize = this.calculateSize(rootNode.left);
    const rhsSize = this.calculateSize(rootNode.right);
    return lhsSize + rhsSize + 1;
  }

  calculateSum(rootNode = this.root): number {
    if (!rootNode) {
      return 0;
    }
    const lhsSum = this.calculateSize(rootNode.left);
    const rhsSum = this.calculateSize(rootNode.right);
    return lhsSum + rhsSum + rootNode.data;
  }

  calculateMax(treeNode = this.root): number {
    if (!treeNode) {
      return 0;
    }
    let max = treeNode.data;
    const lhsMax = this.calculateMax(treeNode.left);
    const rhsMax = this.calculateMax(treeNode.right);

    let candidate: number;

    if (lhsMax > rhsMax) {
      candidate = lhsMax;
    } else {
      candidate = rhsMax;
    }

    return max > candidate ? max : candidate;
  }

  calculateHeight_2(treeNode = this.root): number {
    if (!treeNode) {
      return 0;
    }

    let height = 1;

    const lhsHeight = this.calculateHeight(treeNode.left);
    const rhsHeight = this.calculateHeight(treeNode.right);

    if (lhsHeight > rhsHeight) {
      height += lhsHeight;
    } else {
      height += rhsHeight;
    }
    return height;
  }

  calculateHeight(treeNode = this.root): number {
    if (treeNode === null || treeNode === undefined) {
      return -1; // -1 for edges, 0 for nodes
    }

    const lhsHeight = this.calculateHeight(treeNode.left);
    const rhsHeight = this.calculateHeight(treeNode.right);

    const res = Math.max(lhsHeight, rhsHeight) + 1;
    return res;
  }

  calculateNodeToRootPath(data: number, treeNode = this.root): boolean {
    if (!treeNode) {
      return false;
    }

    if (treeNode.data === data) {
      this.nodeToRootPath.push(treeNode);
      return true;
    }

    const isPresentInLHS = this.calculateNodeToRootPath(data, treeNode.left);

    if (isPresentInLHS) {
      this.nodeToRootPath.push(treeNode);
      return true;
    }

    const isPresentInRHS = this.calculateNodeToRootPath(data, treeNode.right);

    if (isPresentInRHS) {
      this.nodeToRootPath.push(treeNode);
      return true;
    }

    return false;
  }

  printKLevelsDown(
    k: number,
    treeNode = this.root,
    blocker: MyBinaryTreeNode | null,
  ): void {
    if (!treeNode || k < 0 || treeNode === blocker) {
      return;
    }

    if (k === 0) {
      console.log(treeNode.data);
    }

    this.printKLevelsDown(k - 1, treeNode.left, blocker);
    this.printKLevelsDown(k - 1, treeNode.right, blocker);
  }

  // awaiy => from top and the bottom
  printKNodesAway(data: number, k: number, treeNode = this.root): void {
    this.calculateNodeToRootPath(data, treeNode);
    const path = this.getNodeToRootPath;
    for (let i = 0; i < path.length; i++) {
      const current = path[i];
      this.printKLevelsDown(k - i, current, i === 0 ? null : path[i - 1]);
    }
  }

  calculatePathToLeafFromRootInRange(
    low: number,
    high: number,
    treeNode = this.root,
    path = '',
    sum = 0,
  ): void {
    if (!treeNode) {
      return;
    }
    // leaf
    if (!treeNode.left && !treeNode.right) {
      sum += treeNode.data; // adding the leaf's data too
      if (sum >= low && sum <= high) {
        console.log(path + ` ${treeNode.data}`);
      }
      return;
    }
    this.calculatePathToLeafFromRootInRange(
      low,
      high,
      treeNode.left,
      path + ` ${treeNode.data}`,
      sum + treeNode.data,
    );
    this.calculatePathToLeafFromRootInRange(
      low,
      high,
      treeNode.right,
      path + ` ${treeNode.data}`,
      sum + treeNode.data,
    );
  }

  transformToLeftClonedTree(treeNode = this.root) {
    if (!treeNode) {
      return null;
    }

    const leftClonedTree = this.transformToLeftClonedTree(treeNode.left);
    const rightClonedTree = this.transformToLeftClonedTree(treeNode.right);
    const newNode = new MyBinaryTreeNode(treeNode.data, leftClonedTree);
    treeNode.left = newNode;
    treeNode.right = rightClonedTree;
    return treeNode;
  }

  transformBackFromLeftClonedTree(treeNode = this.root) {
    if (!treeNode) {
      return null;
    }

    const leftTree = this.transformBackFromLeftClonedTree(treeNode.left?.left); // 2 nodes are same so left => left
    const rightTree = this.transformBackFromLeftClonedTree(treeNode.right);
    treeNode.left = leftTree;
    treeNode.right = rightTree;
    return treeNode;
  }

  // print nodes which are the only child of their parents
  printSingleChildNodes(
    treeNode = this.root,
    parent: MyBinaryTreeNode | null = null,
  ) {
    if (!treeNode) {
      return;
    }

    if (
      (parent && parent.left && !parent.right) ||
      (parent && parent.right && !parent.left)
    ) {
      console.log(treeNode.data);
      return;
    }

    this.printSingleChildNodes(treeNode.left, treeNode);
    this.printSingleChildNodes(treeNode.right, treeNode);
  }

  removeLeaves(treeNode = this.root) {
    if (!treeNode) {
      return null;
    }

    // leaf
    if (!treeNode.left && !treeNode.right) {
      return null; // returning null in place of a node
    }

    treeNode.left = this.removeLeaves(treeNode.left);
    treeNode.right = this.removeLeaves(treeNode.right);
    return treeNode;
  }

  // max number of edges between two farthest nodes
  calculateDiameter(treeNode = this.root) {
    if (!treeNode) {
      return 0;
    }
    const lhsDiameter = this.calculateDiameter(treeNode.left) as number;
    const rhsDiameter = this.calculateDiameter(treeNode.right) as number;
    const currentHeight =
      this.calculateHeight(treeNode.left) +
      this.calculateHeight(treeNode.right) +
      2;
    const diameter = Math.max(
      currentHeight,
      Math.max(lhsDiameter, rhsDiameter),
    );
    return diameter;
  }

  isBST(treeNode = this.root) {}

  get getNodeToRootPath() {
    return this.nodeToRootPath;
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
// mybt.create([
//   50,
//   25,
//   12,
//   null,
//   null,
//   37,
//   30,
//   null,
//   null,
//   null,
//   75,
//   62,
//   null,
//   70,
//   null,
//   null,
//   87,
//   null,
//   null,
// ]);
// mybt.create([
//   50,
//   25,
//   12,
//   null,
//   null,
//   37,
//   30,
//   null,
//   null,
//   null,
//   75,
//   62,
//   null,
//   70,
//   null,
//   null,
//   87,
//   null,
//   null,
// ]);
// mybt.preOrder();
// mybt.inOrder();
// mybt.postOrder();
// mybt.levelOrder();
// mybt.printKLevelsDown(3);
// mybt.printKNodesAway(37, 2);
// mybt.calculatePathToLeafFromRootInRange(150, 250);
// mybt.transformToLeftClonedTree();
// mybt.transformBackFromLeftClonedTree();
// mybt.preOrder();
// mybt.printSingleChildNodes();
// mybt.removeLeaves();
// mybt.preOrder();
// mybt.calculateNodeToRootPath(30);
// console.log(mybt.getNodeToRootPath);
// console.log(mybt.getSize);
// console.log(mybt.calculateSize());
// console.log(mybt.calculateSum());
// console.log(mybt.calculateMax());
// console.log(mybt.calculateHeight());
console.log(mybt.calculateDiameter());
