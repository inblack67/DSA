const factorial = (range: number) => {
  if (range <= 1) {
    return 1;
  }
  return range * factorial(range - 1);
};

console.log(factorial(5));
