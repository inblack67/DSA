// in place
const swap_10 = (arr: number[], index1: number, index2: number): void => {
  console.log(`Swapping index ${index1} and index ${index2}`);
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const displayArray_10 = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    process.stdout.write(`${arr[i]} `);
  }
};

const performParitioning_11 = (arr: number[]): void => {
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    if (arr[j] >= arr[i]) {
      i++;
    } else {
      swap_10(arr, i, j);
      i++;
      j++;
    }
  }
};

const myArray_10 = [0, 1, 0, 1, 0];
performParitioning_11(myArray_10);
console.log(myArray_10);
