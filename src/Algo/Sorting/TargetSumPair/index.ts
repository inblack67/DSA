// has to do it in nlogn
const myMerging = (arr1: number[], arr2: number[]): number[] => {
  let i = 0;
  let j = 0;
  const extra = new Array(arr1.length + arr2.length);
  let k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      extra[k++] = arr1[i++];
    } else {
      extra[k++] = arr2[j++];
    }
  }
  for (; i < arr1.length; i++) {
    extra[k++] = arr1[i];
  }
  for (; j < arr2.length; j++) {
    extra[k++] = arr2[j];
  }
  return extra;
};

const myMergeSort = (arr: number[], low: number, high: number): number[] => {
  if (low === high) {
    // one element only
    const myArr: number[] = new Array(1);
    myArr[0] = arr[low];
    return myArr;
  }

  const mid = Math.floor((low + high) / 2);
  const arr1 = myMergeSort(arr, low, mid);
  const arr2 = myMergeSort(arr, mid + 1, high);
  return myMerging(arr1, arr2);
};

const targetSumPairs = (arr: number[], target: number) => {
  const sorted = myMergeSort(arr, 0, arr.length - 1);
  let i = 0;
  let j = sorted.length - 1;
  while (i < j) {
    const sum = sorted[i] + sorted[j];
    if (sum > target) {
      // sorted[j] is too big
      j--;
    } else if (sum < target) {
      // sorted[i] is too small
      i++;
    } else {
      // sum === target
      console.log(`${sorted[i]}, ${sorted[j]}`);
      i++;
      j--;
    }
  }
};

targetSumPairs([9, -48, 100, 43, 84, 74, 86, 34, -37, 60, -29, 44], 160);
