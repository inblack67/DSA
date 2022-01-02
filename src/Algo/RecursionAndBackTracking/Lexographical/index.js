const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const printLexographicalOrder = (n) => {
  for (let i = 1; i <= 9; i++) {
    dfs(i, n);
  }
};

const dfs = (parent, target) => {
  if (parent > target) {
    return;
  }
  console.log(parent); // 1
  const hierarchy = parent * 10;
  for (let i = 0; i <= 9; i++) {
    dfs(hierarchy + i, target);
  }
};

const main = () => {
  const n = +readMe();
  printLexographicalOrder(n);
};

main();
