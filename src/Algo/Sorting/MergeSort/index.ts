const performMerging_2 = (arr1: number[], arr2: number[]): number[] => {
  const merge: number[] = new Array(arr1.length + arr2.length);
  let i = 0; // arr1 index
  let j = 0; // arr2 index
  let k = 0; // arr3 index
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merge[k++] = arr1[i++];
    } else {
      merge[k++] = arr2[j++];
    }
  }

  //   copying the remains
  for (; i < arr1.length; i++) {
    merge[k++] = arr1[i];
  }
  //   copying the remains
  for (; j < arr2.length; j++) {
    merge[k++] = arr2[j];
  }
  return merge;
};

const performMergeSort = (
  arr: number[],
  low: number,
  high: number,
): number[] => {
  if (low === high) {
    // only one element in the arr
    const myArr: number[] = new Array(1);
    myArr[0] = arr[low];
    return myArr;
  }

  const mid = Math.floor((low + high) / 2);
  const first = performMergeSort(arr, low, mid);
  const second = performMergeSort(arr, mid + 1, high);
  return performMerging_2(first, second);
};

// const mymergearr = [1, 3, 56, 2, 1, 5, 7, 3];
const mymergearr = [7, -2, 4, 1, 3];
const res = performMergeSort(mymergearr, 0, mymergearr.length - 1);
console.log(res);
