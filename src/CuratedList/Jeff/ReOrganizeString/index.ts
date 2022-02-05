class MyPair {
  char: string;
  freq: number;
  constructor(char: string, freq: number) {
    this.char = char;
    this.freq = freq;
  }
}

class MaxFrequencyPriorityQueue {
  private heap: MyPair[];
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
  insert(el: MyPair) {
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
      if (current.freq > parent.freq) {
        this.swap(parentIndex, currentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }
  delete(): MyPair {
    if (this.heap.length === 1) {
      return this.heap.pop() as MyPair;
    }
    const res = this.heap[0];
    this.heap[0] = this.heap.pop() as MyPair;
    let currentIndex = 0;
    while (currentIndex < this.heap.length) {
      let current = this.heap[currentIndex];
      let leftChildIndex = this.getLeftChildIndex(currentIndex);
      let rightChildIndex = this.getRightChildIndex(currentIndex);
      let swap: number | null = null;
      let leftChild: MyPair;
      if (leftChildIndex < this.heap.length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.freq > current.freq) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < this.heap.length) {
        let rightChild = this.heap[rightChildIndex];
        if (swap === null && rightChild.freq > current.freq) {
          swap = rightChildIndex;
        } else if (swap !== null && rightChild.freq > leftChild!.freq) {
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
  getSize(): number {
    return this.heap.length;
  }
  display() {
    console.log(this.heap);
  }
}

const reOrganizeString = (s: string): string => {
  let res = '';
  const strArr = s.split('');
  const hash = new Map<string, number>();
  strArr.forEach((char) => {
    if (hash.has(char)) {
      const freq = hash.get(char)!;
      hash.set(char, freq + 1);
    } else {
      hash.set(char, 1);
    }
  });
  const pq = new MaxFrequencyPriorityQueue();
  hash.forEach((val, key) => {
    const pair = new MyPair(key, val);
    pq.insert(pair);
  });

  let blocked: MyPair = pq.delete() as MyPair;
  res += blocked.char;
  blocked.freq--;
  while (pq.getSize() > 0) {
    const temp = pq.delete() as MyPair;
    res += temp.char;
    temp.freq--;
    if (blocked.freq > 0) {
      pq.insert(blocked);
    }
    blocked = temp;
  }

  if (blocked!.freq > 0) {
    return '';
  }

  return res;
};

console.log(reOrganizeString('aab'));
