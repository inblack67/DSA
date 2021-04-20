const reverseNumber = (num: number): void => {
  let n = num;
  while (n > 0) {
    console.log(n % 10);
    n = Math.floor(n / 10);
  }
};

reverseNumber(754);
