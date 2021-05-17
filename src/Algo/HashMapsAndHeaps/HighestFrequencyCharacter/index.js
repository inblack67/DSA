const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const charWithHighestFrequency = (str) => {
  const hash = new Map();
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    const get = hash.get(el);
    if (get === undefined) {
      hash.set(el, 1);
    } else {
      hash.set(el, get + 1);
    }
  }

  let maxEl = '';
  let maxFreq = 0;
  hash.forEach((val, key) => {
    if (val > maxFreq) {
      maxFreq = val;
      maxEl = key;
    }
  });

  console.log(maxEl);
};

const main = () => {
  charWithHighestFrequency(readMe());
};

main();
