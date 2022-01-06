const whoSurvived = (n: number, k: number): number => {
  if (n === 1) {
    return 0;
  }
  const sofar = whoSurvived(n - 1, k);
  return (sofar + k) % n;
};

console.log(whoSurvived(4, 2));
