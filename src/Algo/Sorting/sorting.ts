class BinNode {
  data: number;
  next: BinNode | null;
  constructor(data: number, next: BinNode | null = null) {
    this.data = data;
    this.next = next;
  }
}

class BinBucket {
  private head: BinNode | null;
  private size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(el: number) {
    const newNode = new BinNode(el);
    if (!this.head) {
      this.head = newNode;
      this.size++;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
      this.size++;
    }
  }
  pop(): number {
    if (!this.head) {
      throw new Error('Nothing to pop');
    }
    if (this.size === 1) {
      const popped = this.head.data;
      this.head = null;
      this.size--;
      return popped;
    }
    let curr = this.head;
    let prev: BinNode | null = null;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    const popped = curr.data;
    prev!.next = null;
    this.size--;
    return popped;
  }
  getSize() {
    return this.size;
  }
  display() {
    if (!this.head) {
      console.log(this.head);
      return;
    }
    let curr: BinNode | null = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

class Sorting {
  private arr: number[];
  constructor(arr: number[]) {
    this.arr = arr;
  }
  swap(index1: number, index2: number) {
    const temp = this.arr[index1];
    this.arr[index1] = this.arr[index2];
    this.arr[index2] = temp;
  }
  bubbleSort() {
    for (let i = 0; i < this.arr.length - 1; i++) {
      let flag = 0; // making it adaptable => only one pass for already sorted arr
      for (let j = 0; j < this.arr.length - 1; j++) {
        const el = this.arr[j];
        const el2 = this.arr[j + 1];
        if (el > el2) {
          flag = 1; // swap was performed
          this.swap(j, j + 1);
        }
      }
      if (!flag) {
        //   no swaps were performed in the first pass => arr is already sorted => return;
        return;
      }
    }
  }
  insertionSort() {
    // [8, 5, 7, 3, 2];

    // first element is already sorted
    for (let i = 1; i < this.arr.length; i++) {
      const el = this.arr[i];
      let prevIndex = i - 1;
      const prev = this.arr[prevIndex];

      // maintaing the list sorted till the current element
      while (prev > el && prevIndex > -1) {
        this.arr[prevIndex + 1] = this.arr[prevIndex];
        prevIndex--;
      }
      this.arr[prevIndex + 1] = el;
    }
  }

  selectionSort() {
    for (let i = 0; i < this.arr.length; i++) {
      let k = i;
      for (let j = i + 1; j < this.arr.length; j++) {
        if (this.arr[j] < this.arr[k]) {
          k = j;
        }
      }
      this.swap(i, k);
    }
  }

  partition(low: number, high: number): number {
    const pivot = this.arr[low];
    let i = low;
    let j = high;
    while (i < j) {
      do {
        i++;
      } while (this.arr[i] <= pivot);
      do {
        j--;
      } while (this.arr[j] > pivot);
      if (i < j) {
        this.swap(i, j);
      }
    }
    this.swap(low, j);
    return j;
  }

  quickSort(low: number, high: number) {
    if (low < high) {
      // at least two els
      let j = this.partition(low, high);
      this.quickSort(low, j);
      this.quickSort(j + 1, high);
    }
  }

  merge(low: number, mid: number, high: number): void {
    let i = low;
    let j = mid + 1;
    let k = low;
    const newArr = new Array(high);
    while (i <= mid && j <= high) {
      if (this.arr[i] > this.arr[j]) {
        newArr[k++] = this.arr[j++];
      } else {
        newArr[k++] = this.arr[i++];
      }
    }
    for (; i <= mid; i++) {
      newArr[k++] = this.arr[i];
    }
    for (; j <= high; j++) {
      newArr[k++] = this.arr[j];
    }
    for (let i = low; i <= high; i++) {
      this.arr[i] = newArr[i];
    }
  }

  mergeSort(low: number = 0, high: number = this.arr.length - 1) {
    if (low < high) {
      const mid = Math.floor((low + high) / 2);
      this.mergeSort(low, mid);
      this.mergeSort(mid + 1, high);
      this.merge(low, mid, high);
    }
  }

  // [8, 3, 7, 4, 9, 2, 6, 5]
  iterativeMergeSort() {
    // sorted list of this.arr.length elements (1 el per list => each is sorted)
    // passes
    let p = 2;
    for (; p < this.arr.length; p *= 2) {
      for (let i = 0; i + p - 1 < this.arr.length; i += p) {
        let low = i;
        let high = i + p - 1;
        let mid = Math.floor((low + high) / 2);
        this.merge(low, mid, high);
      }
    }
    if (Math.floor(p / 2) < this.arr.length) {
      this.merge(0, Math.floor(p / 2) - 1, this.arr.length - 1);
    }
  }

  // not stable and does not sort negative nums
  countSort_2() {
    const maxEl = Math.max(...this.arr);
    const hash: number[] = new Array(maxEl + 1).fill(0);
    for (let i = 0; i < this.arr.length; i++) {
      const el = this.arr[i];
      hash[el]++;
    }
    let arrIndex = 0;
    let hashIndex = 0;
    while (hashIndex < hash.length) {
      if (hash[hashIndex] > 0) {
        this.arr[arrIndex++] = hashIndex;
        hash[hashIndex]--;
      } else {
        hashIndex++;
      }
    }
  }

  // sorts negative nums but is not stable
  countSort_3() {
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    // calc min max
    for (let i = 0; i < this.arr.length; i++) {
      const el = this.arr[i];
      if (el > max) {
        max = el;
      }
      if (el < min) {
        min = el;
      }
    }
    const range = max - min;
    const freq = new Array(range + 1).fill(0); // +1 => because max diff can be max num in the array => when doing max - min for max num's turn
    for (let i = 0; i < this.arr.length; i++) {
      const el = this.arr[i];
      const index = el - min;
      freq[index]++;
    }
    let j = 0;
    for (let i = 0; i < freq.length; i++) {
      let el = freq[i];
      while (el > 0) {
        const val = i + min;
        this.arr[j++] = val;
        el--;
      }
    }
  }

  // perfect count sort => sorts -ve nums and is stable
  countSort() {
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    // calc min max
    for (let i = 0; i < this.arr.length; i++) {
      const el = this.arr[i];
      if (el > max) {
        max = el;
      }
      if (el < min) {
        min = el;
      }
    }
    const range = max - min;
    const freq = new Array(range + 1).fill(0); // +1 => because max diff can be max num in the array => when doing max - min for max num's turn
    for (let i = 0; i < this.arr.length; i++) {
      const el = this.arr[i];
      const index = el - min;
      freq[index]++;
    }

    // converting frequency array to prefix sum array
    for (let i = 1; i < freq.length; i++) {
      freq[i] += freq[i - 1];
    }

    const ans = new Array(this.arr.length);
    for (let i = this.arr.length - 1; i >= 0; i--) {
      const el = this.arr[i];
      const index = freq[el - min] - 1; // el - min has the freq stored of the el in the freq arr => -1 because we need the index
      ans[index] = el;
      freq[el - min]--; // does not affect the res of the algo as the loop will run only this.arr.length times anyway
    }

    for (let i = 0; i < ans.length; i++) {
      this.arr[i] = ans[i];
    }
  }

  binBucketSort() {
    const maxEl = Math.max(...this.arr);
    const bin: BinBucket[] = new Array(maxEl + 1).fill(null);

    for (let i = 0; i < bin.length; i++) {
      const binll = new BinBucket();
      bin[i] = binll;
    }

    for (let i = 0; i < this.arr.length; i++) {
      const el = this.arr[i];
      bin[el].append(el);
    }

    let arrIndex = 0;
    let j = 0;

    while (arrIndex < this.arr.length) {
      const currentBin = bin[j];
      if (currentBin.getSize() > 0) {
        let popped = currentBin.pop();
        this.arr[arrIndex++] = popped;
      } else {
        j++;
      }
    }
  }

  radixSort(base: number = 10) {
    const maxEl = Math.max(...this.arr);
    const maxElLength = maxEl.toString().length;
    const bin: BinBucket[] = new Array(base).fill(null);

    for (let i = 0; i < bin.length; i++) {
      const binll = new BinBucket();
      bin[i] = binll;
    }

    let modVal = 1;
    for (let i = 0; i < maxElLength; i++) {
      for (let k = 0; k < this.arr.length; k++) {
        const el = this.arr[k];
        const digit = Math.floor(el / modVal) % base;
        bin[digit].append(el);
      }

      let arrIndex = 0;
      let j = 0;

      while (arrIndex < this.arr.length) {
        const currentBin = bin[j];
        if (currentBin.getSize() > 0) {
          let popped = currentBin.pop();
          this.arr[arrIndex++] = popped;
        } else {
          j++;
        }
      }

      modVal *= base;
    }
  }

  calculateGap(len: number): number {
    return Math.floor(len / 2);
  }

  shellSort() {
    let gap = this.calculateGap(this.arr.length);
    let i = 0,
      j = 0,
      temp = 0;
    for (; gap >= 1; gap = this.calculateGap(gap)) {
      for (i = gap; i < this.arr.length; i++) {
        temp = this.arr[i];
        j = i - gap;
        while (j >= 0 && this.arr[j] > temp) {
          this.arr[j + gap] = this.arr[j];
          j -= gap;
        }
        this.arr[j + gap] = temp;
      }
    }
  }

  getArr() {
    return this.arr;
  }
}

// const sort1 = new Sorting([8, 3, 7, 4, 9, 2, 6, 5]);
// const sort1 = new Sorting([7, 8, 5, 3, 5, 7, 3, 2, 2, 8]);
const sort1 = new Sorting([8, 5, 7, 3, 2, -2]);
// const sort1 = new Sorting([237, 146, 259, 348, 152, 163, 235, 48, 36, 62]);
// const sort1 = new Sorting([9, 5, 16, 8, 13, 6, 12, 10, 4, 2, 3]);
// sort1.bubbleSort();
// sort1.insertionSort();
// sort1.selectionSort();
// sort1.quickSort(0, 5);
// sort1.mergeSort();
// sort1.iterativeMergeSort();
sort1.countSort();
// sort1.binBucketSort();
// sort1.radixSort();
// sort1.shellSort();
console.log(sort1.getArr());
