const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const printAbbreviations = (str, ans = '', count = 0, position = 0) => {
  if (position === str.length) {
    if (count === 0) {
      console.log(ans);
    } else {
      console.log(ans + count);
    }
    return;
  }
  if (count > 0) {
    printAbbreviations(str, ans + count + str[position], 0, position + 1); // yes
  } else {
    printAbbreviations(str, ans + str[position], 0, position + 1); // yes
  }
  printAbbreviations(str, ans, count + 1, position + 1); // no
};

const main = () => {
  const str = readMe();
  printAbbreviations(str);
};

main();
