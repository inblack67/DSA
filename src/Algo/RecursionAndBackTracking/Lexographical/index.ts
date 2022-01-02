export const printLexographicalOrder = (n: number): void => {
  for (let i = 1; i <= 9; i++) {
    dfs(i, n);
  }
};

const dfs = (parent: number, target: number): void => {
  if (parent > target) {
    return;
  }
  console.log(parent); // 1
  const hierarchy = parent * 10;
  for (let i = 0; i <= 9; i++) {
    dfs(hierarchy + i, target);
  }
};

printLexographicalOrder(14);
