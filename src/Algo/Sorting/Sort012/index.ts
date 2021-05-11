// in place
const swap_10 = (arr: number[], index1: number, index2: number): void => {
  console.log(`Swapping index ${index1} and index ${index2}`);
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const displayArray_10 = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const sort012 = (arr: number[]): void => {
  let j = 0; // 0 to j-1 => 0's area
  let i = 0; // j to i - 1 => 1's area
  let k = arr.length - 1; // k + 1 to end => 2's area
  // i to k => unkown
  while (i <= k) {
    if (arr[i] === 0) {
      swap_10(arr, i, j);
      i++;
      j++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      // arr[i] === 2
      swap_10(arr, i, k);
      k--;
    }
  }
  displayArray_10(arr);
};

const myArray_10 = [0, 1, 2, 1, 1, 0, 2, 0, 0];
sort012(myArray_10);
console.log(myArray_10);
