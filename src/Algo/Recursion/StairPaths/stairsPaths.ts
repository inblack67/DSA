// 1,2 or 3 steps in one move
const getStairsPath = (stairs: number): string[] => {
  if (stairs === 0) {
    return [''];
  } else if (stairs < 0) {
    return [];
  }
  const ways1 = getStairsPath(stairs - 1);
  const ways2 = getStairsPath(stairs - 2);
  const ways3 = getStairsPath(stairs - 3);

  const res: string[] = [];

  for (let i = 0; i < ways1.length; i++) {
    res.push(`${1 + ways1[i]}`);
  }
  for (let i = 0; i < ways2.length; i++) {
    res.push(`${2 + ways2[i]}`);
  }
  for (let i = 0; i < ways3.length; i++) {
    res.push(`${3 + ways3[i]}`);
  }
  return res;
};

console.log(getStairsPath(3));

const printStairsPath = (stairs: number, ans: string): void => {
  if (stairs === 0) {
    console.log(ans);
    return;
  } else if (stairs < 0) {
    return;
  }
  printStairsPath(stairs - 1, ans + 1);
  printStairsPath(stairs - 2, ans + 2);
  printStairsPath(stairs - 3, ans + 3);
};

printStairsPath(3, '');
