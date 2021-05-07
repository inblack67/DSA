const displayArray_3 = (arr: number[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

// gives back the number at the specified digitPlace in the num
const getDigitPlaceNum = (num: number, digitPlace: number): number => {
  return Math.floor((num / digitPlace) % 10);
};

// perfect count sort => sorts -ve nums and is stable
const performCountSortForRadixSort = (
  arr: number[],
  digitPlace: number, // 1, 10, 100, ... (one's, ten's...)
): void => {
  // range will now only between 0-9
  // 0 will be min always

  // filling up frequency array
  const frequency: number[] = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const index = getDigitPlaceNum(arr[i], digitPlace);
    frequency[index]++;
  }

  // converting frequency array to prefix sum array
  for (let i = 1; i < frequency.length; i++) {
    frequency[i] += frequency[i - 1];
  }

  const ans = new Array(arr.length);

  for (let i = ans.length - 1; i >= 0; i--) {
    const value = getDigitPlaceNum(arr[i], digitPlace);
    const index = frequency[value] - 1;
    ans[index] = arr[i];
    frequency[value]--;
  }

  for (let i = 0; i < ans.length; i++) {
    arr[i] = ans[i];
  }
};

const performRadixSort = (arr: number[]): void => {
  const max = Math.max(...arr);
  // running till the max length => max digit's length

  let digitPlace = 1;
  while (digitPlace <= max) {
    performCountSortForRadixSort(arr, digitPlace);
    digitPlace *= 10;
  }
};

// const myArray_3 = [7, -2, 4, 1, 3];
const myArray_3 = [8, 3000, 20, 100];
performRadixSort(myArray_3);
console.log(myArray_3);
//
