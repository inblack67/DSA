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
    for (let k = 0; k < this.arr.length - 1; k++) {
      for (let i = 1; i < this.arr.length; i++) {
        const el = this.arr[i];
        const prev = this.arr[i - 1];
        if (prev > el) {
          this.swap(i, i - 1);
        }
      }
    }
  }
  getArr() {
    return this.arr;
  }
}

const sort1 = new Sorting([8, 5, 7, 3, 2]);
// sort1.bubbleSort();
sort1.insertionSort();
console.log(sort1.getArr()); // [2,3,5,7,8]
