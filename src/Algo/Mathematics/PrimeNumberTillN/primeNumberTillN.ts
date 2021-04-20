const isItPrime = (num: number): boolean => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const printPrimes = (low: number, high: number): void => {
  for (let i = low; i <= high; i++) {
    if (isItPrime(i)) {
      console.log(i);
    }
  }
};

printPrimes(6, 24);
