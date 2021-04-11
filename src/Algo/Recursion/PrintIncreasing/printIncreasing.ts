const printIncreasing = (range: number) => {
  if (range < 1) {
    return;
  }
  printIncreasing(range - 1);
  console.log(range);
};

printIncreasing(5);
