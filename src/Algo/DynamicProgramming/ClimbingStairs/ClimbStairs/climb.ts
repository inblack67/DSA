const climbStairsMemo = new Map<number, number>();
const climbStairsMemoized = (stairs: number): number => {
  if (stairs === 0) {
    return 1;
  } else if (stairs < 0) {
    return 0;
  }

  const query = climbStairsMemo.get(stairs);
  if (query !== undefined) {
    return query;
  }

  const paths1 = climbStairsMemoized(stairs - 1);
  const paths2 = climbStairsMemoized(stairs - 2);
  const paths3 = climbStairsMemoized(stairs - 3);
  const res = paths1 + paths2 + paths3;
  climbStairsMemo.set(stairs, res);
  return res;
};

console.log(climbStairsMemoized(4));
