class MyHeap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  swap(i1: number, i2: number): void {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  getLeftChild(i: number) {
    const index = Math.floor(2 * i);
    return this.heap[index];
  }

  getrightChild(i: number) {
    const index = Math.floor(2 * i + 1);
    return this.heap[index];
  }

  getParent(i: number) {
    const index = Math.floor(i / 2);
    return this.heap[index];
  }

  insert(num: number, i: number): void {
    while (i > 0 && this.heap[Math.floor(i / 2)] < num) {
      this.heap[i] = this.heap[Math.floor(i / 2)];
      i = Math.floor(i / 2);
    }
    this.heap[i] = num;
  }

  create(nums: number[]): void {
    this.heap.push(nums[0]);
    for (let i = 1; i < nums.length; i++) {
      const num = nums[i];
      this.insert(num, i);
    }
  }

  delete(): number {
    const deletedEl = this.heap[0];
    const last = this.heap[this.heap.length - 1];
    this.heap[0] = last;
    let i = 0;
    let j = this.getrightChild(i);
    while (j < this.heap.length - 1) {
      if (this.heap[j + 1] < this.heap[j]) {
        j += 1;
      }
      if (this.heap[i] < this.heap[j]) {
        this.swap(i, j);
        i = j;
        j = Math.floor(2 * j);
      } else {
        break;
      }
    }
    return deletedEl;
  }

  display(): void {
    console.log(this.heap);
  }
}

const mheap = new MyHeap();
mheap.create([10, 20, 30, 25, 5, 40, 35]);
console.log(mheap.delete());
console.log(mheap.delete());
console.log(mheap.delete());
mheap.display();

// class BTNode {
//   data: number;
//   left: BTNode | null;
//   right: BTNode | null;
//   constructor(
//     data: number,
//     left: BTNode | null = null,
//     right: BTNode | null = null,
//   ) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
// }

// class BT {
//   root: BTNode | null;
//   constructor() {
//     this.root = null;
//   }

//   create(arr: number[]): void {
//     if (arr.length === 0) {
//       return;
//     }
//     let i = 0;
//     const queue: BTNode[] = [];
//     const rootNode = new BTNode(arr[i++]);
//     this.root = rootNode;
//     queue.push(this.root);
//     while (queue.length > 0 && i < arr.length) {
//       const someNode = queue.shift() as BTNode;
//       const newNode = new BTNode(arr[i++]);
//       if (!someNode.left) {
//         someNode.left = newNode;
//       } else if (!someNode.right) {
//         someNode.right = newNode;
//       }
//       queue.push(newNode);
//     }
//   }
//   preOrder(node = this.root): void {
//     if (!node) {
//       return;
//     }
//     console.log(node.data);
//     this.preOrder(node.left);
//     this.preOrder(node.right);
//   }
//   levelOrder(node = this.root): void {
//     if (!node) {
//       return;
//     }
//     console.log(node.data);
//     const queue: BTNode[] = [];
//     queue.push(node);
//     while (queue.length > 0) {
//       const someNode = queue.shift() as BTNode;
//       if (someNode.left) {
//         console.log(someNode.left.data);
//         queue.push(someNode.left);
//       }
//       if (someNode.right) {
//         console.log(someNode.right.data);
//         queue.push(someNode.right);
//       }
//     }
//   }
// }

// const bt2 = new BT();
// bt2.create([3, 43, 23, 2, 334]);
// bt2.preOrder();
// bt2.levelOrder();
