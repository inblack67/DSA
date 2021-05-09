const displayArray_8 = (arr: string[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

const myCountSort = (
  arr: string[],
  range: number,
  divisor: number,
  modulo: number,
): void => {
  // filling up frequency array
  const frequency: number[] = new Array(range).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor(+arr[i] / divisor) % modulo;
    console.log(index);
    frequency[index]++;
  }

  // converting frequency array to prefix sum array
  for (let i = 1; i < frequency.length; i++) {
    frequency[i] += frequency[i - 1];
  }

  const ans = new Array(arr.length);

  for (let i = ans.length - 1; i >= 0; i--) {
    const value = Math.floor(+arr[i] / divisor) % modulo;
    console.log(value);
    const index = frequency[value] - 1;
    console.log(index);
    ans[index] = arr[i];
    frequency[value]--;
  }

  for (let i = 0; i < ans.length; i++) {
    arr[i] = ans[i];
  }
};

const sortDates = (arr: string[]): void => {
  // day:-
  // range => 32 => 0-31 indexed arr
  // divisor => Math.pow(10, 6) => DD/MM/YYYY
  // modulo => 100
  myCountSort(arr, 32, Math.pow(10, 6), 100);

  // month:-
  // range => 13 => 0-12 indexed arr
  // divisor => Math.pow(10, 4)
  // modulo => 100
  myCountSort(arr, 13, Math.pow(10, 4), 100);

  // year:-
  // range => 2501 => 0-2500 indexed arr
  // divisor => Math.pow(10, 4)
  // modulo => 1
  myCountSort(arr, 2501, Math.pow(10, 4), 1);

  displayArray_8(arr);
};

// DD/MM/YYYY formatted date strings
const myArray_1 = ['12041996', '20101996', '05061997', '12041989', '11081987'];
sortDates(myArray_1);
console.log(myArray_1);
