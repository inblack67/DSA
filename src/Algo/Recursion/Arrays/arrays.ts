const printArrayWithRecursion = (arr: number[], index: number = 0) => {
  if (index === arr.length) {
    return;
  }
  console.log(arr[index]);
  return printArrayWithRecursion(arr, index + 1);
};

printArrayWithRecursion([1, 2, 3, 4, 5]);

const printArrayInReverseWithRecursion = (arr: number[], index: number) => {
  if (index === -1) {
    return;
  }
  console.log(arr[index]);
  return printArrayInReverseWithRecursion(arr, index - 1);
};

printArrayInReverseWithRecursion([1, 2, 3, 4, 5], 4);
