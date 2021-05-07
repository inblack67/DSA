// in place
const swap_2 = (arr: number[], index1: number, index2: number): void => {
  console.log(`Swapping ${arr[index1]} and ${arr[index2]}`);
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const displayArray_2 = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const performCountSort_2 = (arr: number[]): void => {
  const maxEl = Math.max(...arr);
  const hash: number[] = new Array(maxEl + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]]++;
  }
  let j = 0;
  for (let i = 0; i < hash.length; i++) {
    let el = hash[i];
    while (el > 0) {
      arr[j++] = i;
      el--;
    }
  }
};

// sorts negative elements too and its stable
const performCountSort = (arr: number[]): void => {
  // calc max min
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  // filling up frequency array
  const frequency: number[] = new Array(max - min + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const index = arr[i] - min;
    frequency[index]++;
  }

  console.log(frequency);

  let j = 0;

  for (let i = 0; i < frequency.length; i++) {
    let el = frequency[i];
    while (el > 0) {
      arr[j++] = i + min;
      el--;
    }
  }

  displayArray_2(arr);
};

// const myArray_2 = [7, -2, 4, 1, 3];
// const myArray_2 = [8, 3, 2, 7, 4, 9, 2, 6, 5];
performCountSort(myArray_2);
console.log(myArray_2);
//
