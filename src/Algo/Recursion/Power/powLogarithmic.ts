const myPow2 = (x: number, n: number): number => {
  if (n === 0) {
    return 1;
  }
  const calc = myPow2(x, Math.floor(n / 2));
  let res = calc * calc;
  if (n % 2 === 0) {
    return res;
  }
  res *= x;
  return res;
};

console.log(myPow2(5, 3));
