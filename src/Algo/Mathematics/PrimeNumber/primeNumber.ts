// if a number is divisible, it will get divided until it's square root
const isPrime = (num: number): boolean => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(23));
