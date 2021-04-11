const myPow = (x: number, n: number) => {
  if (n === 0) {
    return 1;
  }
  return x * myPow(x, n - 1);
};

console.log(myPow(5, 3));
