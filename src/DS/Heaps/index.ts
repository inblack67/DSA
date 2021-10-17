class MHeap {
  heap: number[];
  constructor() {
    this.heap = [];
  }
  add(el: number): void {
    this.heap.push(el);
    let index = this.heap.length - 1;
    let current = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (current >= parent) {
        this.heap[index] = parent;
        this.heap[parentIndex] = current;
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  remove(): number | null {
    if (this.heap.length === 0) {
      return null;
    } else if (this.heap.length === 1) {
      return this.heap.pop() as number;
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop() as number;
    let index = 0;
    let current = this.heap[index];
    while (index >= 0) {
      let leftChildIndex = Math.floor(2 * index + 1);
      let rightChildIndex = Math.floor(2 * index + 2);
      let leftChild: number;
      let rightChild: number;
      let swap: number | null = null;
      if (leftChildIndex < this.heap.length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > current) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < this.heap.length) {
        rightChild = this.heap[rightChildIndex];
        if (swap === null) {
          if (rightChild > current) {
            swap = rightChildIndex;
          }
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

    return max;
  }
  heapSort(): number[] {
    if (this.heap.length <= 1) {
      return [];
    }
    const res: number[] = [];
    let len = this.heap.length;
    for (let i = 0; i < len; i++) {
      const popped = this.remove() as number;
      res.push(popped);
    }
    return res;
  }
  display(): void {
    console.log(this.heap);
  }
}

const mheap2 = new MHeap();
// mheap2.add(3);
// mheap2.add(4);
// mheap2.add(31);
// mheap2.add(36);
// mheap2.add(6);
// mheap2.add(5);
// mheap2.add(1);
// mheap2.add(10);
// mheap2.add(2);
// mheap2.add(30);
// console.log(mheap2.heapSort());
mheap2.add(5);
mheap2.add(10);
mheap2.add(20);
mheap2.add(3);
console.log(mheap2.remove());
console.log(mheap2.remove());
console.log(mheap2.remove());
console.log(mheap2.remove());
console.log(mheap2.remove());
// console.log(mheap2.remove());
// console.log(mheap2.remove());
// console.log(mheap2.remove());
// console.log(mheap2.remove());
// console.log(mheap2.remove());
// console.log(mheap2.remove());
// console.log(mheap2.remove());
// console.log(mheap2.remove());
// console.log(mheap2.remove());
// console.log(mheap2.remove());
// console.log(mheap2.remove());
// console.log(mheap2.remove());
mheap2.display();
