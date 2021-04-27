const getGCD = (num1: number, num2: number) => {
  let divisor = num1;
  let divident = num2;
  while (divident % divisor !== 0) {
    let remainder = divident % divisor;
    divident = divisor;
    divisor = remainder;
  }
  return divisor;
};

const printGCDAndLCM = (num1: number, num2: number) => {
  const gcd = getGCD(num1, num2);
  const lcm = (num1 * num2) / gcd;
  console.log(gcd);
  console.log(lcm);
};

// printGCDAndLCM(36, 12);
printGCDAndLCM(36, 24);
