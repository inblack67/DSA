interface RSBMaskRes {
  binary: string;
  decimal: number;
}

export const rsbMask = (num: number): RSBMaskRes => {
  // first 1 from the right => rest zero
  //   num and with 2's complement of num
  const res = num & -num;

  // You can use Number.toString(2) function, but it has some problems when representing negative numbers. For example, (-1).toString(2) output is "-1".

  // To fix this issue, you can use the unsigned right shift bitwise operator (>>>) to coerce your number to an unsigned integer.

  // If you run (-1 >>> 0).toString(2) you will shift your number 0 bits to the right, which doesn't change the number itself but it will be represented as an unsigned integer

  const binaryRes = (res >>> 0).toString(2);
  return {
    decimal: res,
    binary: binaryRes,
  };
};

console.log(rsbMask(58));
