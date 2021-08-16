import { rsbMask } from '../RSBMask';

// count number of 1's
export const getNumberOfSetBits = (num: number): number => {
  let count = 0;

  let n = num;

  while (n !== 0) {
    const { decimal } = rsbMask(n);
    n -= decimal;
    count++;
  }

  return count;
};
