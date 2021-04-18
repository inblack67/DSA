// n+1 calls => linear
const myPow = (x: number, n: number): number => {
  if (n === 0) {
    return 1;
  }
  return x * myPow(x, n - 1);
};

console.log(myPow(5, 3));
console.log(myPow(10, 0));
console.log(myPow(2, 5));
