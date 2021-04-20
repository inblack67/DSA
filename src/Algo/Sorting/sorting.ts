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

    // calculated => n-1 comparisons in insertion sort
    // for (let k = 0; k < this.arr.length - 1; k++) {
    //   for (let i = 1; i < this.arr.length; i++) {
    //     const el = this.arr[i];
    //     const prev = this.arr[i - 1];
    //     if (prev > el) {
    //       this.swap(i, i - 1);
    //     }
    //   }
    // }
  }

  selectionSort() {
    for (let i = 0; i < this.arr.length; i++) {
      let k = i;
      for (let j = i; j < this.arr.length; j++) {
        const jEl = this.arr[j];
        const kEl = this.arr[k];
        if (jEl < kEl) {
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
    let i: number = 2;
    for (; i < this.arr.length; i *= 2) {
      for (let j = 0; j < this.arr.length; j += i) {
        const low = j;
        const high = i + j - 1;
        const mid = Math.floor((low + high) / 2);
        this.merge(low, mid, high);
      }
    }
    if (i / 2 < this.arr.length) {
      this.merge(0, i / 2, this.arr.length - 1);
    }
  }

  getArr() {
    return this.arr;
  }
}

const sort1 = new Sorting([8, 3, 7, 4, 9, 2, 6, 5]);
// const sort1 = new Sorting([8, 5, 7, 3, 2]);
// sort1.bubbleSort();
// sort1.insertionSort();
// sort1.selectionSort();
// sort1.quickSort(0, 5);
// sort1.mergeSort();
sort1.iterativeMergeSort();
console.log(sort1.getArr()); // [2,3,5,7,8]
