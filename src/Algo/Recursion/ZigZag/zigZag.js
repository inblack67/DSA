const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const pzz = (n) => {
  if (n === 0) {
    return;
  }
  process.stdout.write(n.toString() + ' ');
  pzz(n - 1);
  process.stdout.write(n.toString() + ' ');
  pzz(n - 1);
  process.stdout.write(n.toString() + ' ');
};

const main = () => {
  const num = readMe();
  pzz(+num);
};

main();
