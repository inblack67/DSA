const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const dict = {
  0: '.;',
  1: 'abc',
  2: 'def',
  3: 'ghi',
  4: 'jkl',
  5: 'mno',
  6: 'pqrs',
  7: 'tu',
  8: 'vwx',
  9: 'yz',
};

function getKPC(str) {
  if (str.length === 0) {
    return [''];
  }
  // faith => 78 => 8 will give it's combos
  const rest = str.substring(1);
  const restRes = getKPC(rest);
  const res = [];
  for (let i = 0; i < dict[str[0]].length; i++) {
    const el = dict[str[0]][i];
    for (let j = 0; j < restRes.length; j++) {
      const el2 = restRes[j];
      res.push(`${el}${el2}`);
    }
  }
  return res;
}

const str = readMe();
console.log(getKPC(str));
