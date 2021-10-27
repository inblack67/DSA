export class MyMaxHeap {
  heap: number[];
  constructor() {
    this.heap = [];
  }
  insert(el: number): void {
    this.heap.push(el);
    let index = this.heap.length - 1;
    let current = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (current > parent) {
        this.heap[index] = parent;
        this.heap[parentIndex] = current;
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  delete(): number | null {
    if (this.heap.length === 0) {
      return null;
    } else if (this.heap.length === 1) {
      return this.heap.pop() as number;
    }

    const res = this.heap[0];

    this.heap[0] = this.heap.pop() as number;

    let index = 0;
    let current = this.heap[index];

    while (index >= 0) {
      let leftChildIndex = Math.floor(2 * index + 1);
      let rightChildIndex = Math.floor(2 * index + 2);
      let swap: number | null = null;
      let leftChild: number;
      let rightChild: number;
      if (leftChildIndex < this.heap.length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > current) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < this.heap.length) {
        rightChild = this.heap[rightChildIndex];
        if (swap === null && rightChild > current) {
          swap = rightChildIndex;
        } else if (rightChild > leftChild!) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) {
        break;
      } else {
        this.heap[index] = this.heap[swap];
        this.heap[swap] = current;
        index = swap;
      }
    }

    return res;
  }
  heapSort(): number[] {
    const res: number[] = [];
    if (this.heap.length === 0) {
      return res;
    }
    let len = this.heap.length;
    for (let i = 0; i < len; i++) {
      res.push(this.delete() as number);
    }
    return res;
  }
  display(): void {
    console.log(this.heap);
  }
}

export class MyMinHeap<T> {
  heap: T[];
  constructor() {
    this.heap = [];
  }
  insert(el: T): void {
    this.heap.push(el);
    let index = this.heap.length - 1;
    let current = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (current < parent) {
        this.heap[index] = parent;
        this.heap[parentIndex] = current;
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  delete(): T | null {
    if (this.heap.length === 0) {
      return null;
    } else if (this.heap.length === 1) {
      return this.heap.pop() as T;
    }

    const res = this.heap[0];

    this.heap[0] = this.heap.pop() as T;

    let index = 0;
    let current = this.heap[index];

    while (index >= 0) {
      let leftChildIndex = Math.floor(2 * index + 1);
      let rightChildIndex = Math.floor(2 * index + 2);
      let swap: number | null = null;
      let leftChild: T;
      let rightChild: T;
      if (leftChildIndex < this.heap.length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < current) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < this.heap.length) {
        rightChild = this.heap[rightChildIndex];
        if (swap === null && rightChild < current) {
          swap = rightChildIndex;
        } else if (rightChild < leftChild!) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) {
        break;
      } else {
        this.heap[index] = this.heap[swap];
        this.heap[swap] = current;
        index = swap;
      }
    }

    return res;
  }
  heapSort(): T[] {
    const res: T[] = [];
    if (this.heap.length === 0) {
      return res;
    }
    let len = this.heap.length;
    for (let i = 0; i < len; i++) {
      res.push(this.delete() as T);
    }
    return res;
  }
  display(): void {
    console.log(this.heap);
  }
}

// const maxHeap = new MyMaxHeap();
// maxHeap.insert(5);
// maxHeap.insert(10);
// maxHeap.insert(20);
// maxHeap.insert(3);
// // console.log(maxHeap.heapSort());
// console.log(maxHeap.delete());
// console.log(maxHeap.delete());
// console.log(maxHeap.delete());
// console.log(maxHeap.delete());
// console.log(maxHeap.delete());
// maxHeap.display();

const printKLargestElements = (arr: number[], k: number): void => {
  const maxHeap = new MyMaxHeap();
  arr.forEach((el) => maxHeap.insert(el));
  let res: string = '';
  for (let i = 0; i < k; i++) {
    const deletedEl = maxHeap.delete();
    res = `${deletedEl}\n${res}`;
  }
  console.log(res);
};

printKLargestElements(
  [13, 12, 62, 22, 15, 37, 99, 11, 37, 98, 67, 31, 84, 99],
  4,
); // [84, 98, 99, 99]
