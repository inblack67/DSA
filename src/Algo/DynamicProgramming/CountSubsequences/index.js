const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const countSubs = (str) => {
  let a = 0,
    ab = 0,
    abc = 0;
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (el === 'a') {
      a = 2 * a + 1;
    } else if (el === 'b') {
      ab = 2 * ab + a;
    } else if (el === 'c') {
      abc = 2 * abc + ab;
    }
  }
  console.log(abc);
};

const main = () => {
  const str = readMe();
  countSubs(str);
};

main();
