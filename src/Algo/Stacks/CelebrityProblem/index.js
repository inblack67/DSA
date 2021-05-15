const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

// O(n)
const findCelebrity = (mat) => {
  const stack = [];
  for (let i = 0; i < mat.length; i++) {
    stack.push(i);
  }

  //   at least 2 el in the stack
  while (stack.length >= 2) {
    const el1 = stack.pop();
    const el2 = stack.pop();
    if (mat[el1][el2]) {
      // el1 knows el2 so el1 cannot be the celebrity
      stack.push(el2);
    } else if (mat[el2][el1]) {
      stack.push(el1);
    }
  }

  if (stack.length === 0) {
    console.log('none');
    return;
  }

  // remaining el in the stack could be the celebrity but it's not certain yet

  const candidate = stack.pop();

  for (let i = 0; i < mat.length; i++) {
    const rowEl = mat[i][candidate];
    const colEl = mat[candidate][i];
    if (colEl === 1) {
      console.log('none');
      return;
    }
    if (rowEl === 0 && i !== candidate) {
      console.log('none');
      return;
    }
  }
  console.log(candidate);
};

const main = () => {
  const rows = +readMe();
  const mat = [];
  for (let i = 0; i < rows; i++) {
    const cols = readMe()
      .split('')
      .map((el) => +el);
    mat.push(cols);
  }
  findCelebrity(mat);
};

main();
