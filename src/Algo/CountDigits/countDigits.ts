const countDigits = (num: number): void => {
  let count = 0;
  let n = num;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  console.log(count);
};

countDigits(10);
