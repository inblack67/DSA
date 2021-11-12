class MaxFrequencyPriorityQueue {
  private heap: number[];
  constructor() {
    this.heap = [];
  }
  private getParentIndex(currentIndex: number): number {
    return Math.floor((currentIndex - 1) / 2);
  }
  private getLeftChildIndex(currentIndex: number): number {
    return Math.floor(2 * currentIndex + 1);
  }
  private getRightChildIndex(currentIndex: number): number {
    return Math.floor(2 * currentIndex + 2);
  }
  private swap(i1: number, i2: number) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  insert(el: number) {
    if (this.heap.length === 0) {
      this.heap.push(el);
      return;
    }
    this.heap.push(el);
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      let current = this.heap[currentIndex];
      let parentIndex = this.getParentIndex(currentIndex);
      let parent = this.heap[parentIndex];
      console.log(current, parent);
      if (current > parent) {
        this.swap(parentIndex, currentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }
  delete(): number {
    if (this.heap.length === 1) {
      return this.heap.pop() as number;
    }
    const res = this.heap[0];
    this.heap[0] = this.heap.pop() as number;
    let currentIndex = 0;
    while (currentIndex < this.heap.length) {
      let current = this.heap[currentIndex];
      let leftChildIndex = this.getLeftChildIndex(currentIndex);
      let rightChildIndex = this.getRightChildIndex(currentIndex);
      let swap: number | null = null;
      let leftChild: number;
      if (leftChildIndex < this.heap.length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild > current) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < this.heap.length) {
        let rightChild = this.heap[rightChildIndex];
        if (swap === null && rightChild > current) {
          swap = rightChildIndex;
        } else if (swap !== null && rightChild > leftChild!) {
          swap = rightChildIndex;
        }
      }

      if (swap !== null) {
        this.swap(swap, currentIndex);
      } else {
        break;
      }
    }

    return res;
  }
  display() {
    console.log(this.heap);
  }
}

// const pq = new MaxFrequencyPriorityQueue();
// const data = [13, 12, 62, 22, 15, 37, 99, 11, 37, 98, 67, 31, 84, 99];
// data.forEach((el) => pq.insert(el));
// data.forEach((el) => {
//   console.log(pq.delete());
// });

// // pq.insert(1);
// // pq.insert(4);
// // pq.insert(10);
// // console.log(pq.delete())
// // console.log(pq.delete())
// // console.log(pq.delete())
// pq.display();

const reOrganizeString = (s: string): string => {
  const frequencies = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    const key = s[i];
    if (frequencies.has(key)) {
      const val = frequencies.get(key);
      frequencies.set(key, val! + 1);
    } else {
      frequencies.set(key, 1);
    }
  }
  console.log(frequencies);
  const pq = new MaxFrequencyPriorityQueue();
  

  return '';
};

reOrganizeString('aab');
