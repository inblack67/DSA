const printDecreasing = (range: number) => {
  if (range < 1) {
    return;
  }
  console.log(range);
  return printDecreasing(range - 1);
};

printDecreasing(5);
