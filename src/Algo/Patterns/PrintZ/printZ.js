const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const printZ = (size) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === 0 || i === size - 1) {
        process.stdout.write('*');
      } else {
        const index = size - 1 - i;
        if (index === j) {
          process.stdout.write('*');
        } else {
          process.stdout.write(' ');
        }
      }
    }
    console.log();
  }
};

const main = () => {
  printZ(5);
};

main();
