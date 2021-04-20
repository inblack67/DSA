const printDigits = (num: number): void => {
  let res = '';
  while (num > 0) {
    res += num % 10;
    num = Math.floor(num / 10);
  }
  for (let i = res.length - 1; i >= 0; i--) {
    console.log(res[i]);
  }
};

printDigits(1000);

const printDigits2 = (num: number): void => {
  let digits = 0;
  let n = num;
  while (n > 0) {
    digits += 1;
    n = Math.floor(n / 10);
  }
  let divisor = Math.pow(10, digits - 1);
  while (divisor > 0) {
    const rem = num % divisor;
    const quotient = Math.floor(num / divisor);
    console.log(quotient);
    num = rem;
    divisor = Math.floor(divisor / 10);
  }
};

// printDigits2(754);
printDigits2(1000);
