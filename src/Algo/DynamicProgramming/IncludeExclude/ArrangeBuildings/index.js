const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const arrangeBuldings = (roadLength) => {
  // n = roadLength
  // n plots on each side of the road => 2n plots
  // plot can have a building or a space
  // but no 2 building should come together
  // calculate for one side of the road => then square it to get the ans => if one side of the road has 6 ways then other side will also have 6 ways => 6*6 => 36 ways
  let oldSpaces = 1;
  let oldBuildings = 1;
  for (let i = 2; i <= roadLength; i++) {
    const newBuildings = oldSpaces;
    const newSpaces = oldBuildings + oldSpaces;
    oldBuildings = newBuildings;
    oldSpaces = newSpaces;
  }
  const waysForOneSideOfTheRoad = oldSpaces + oldBuildings;
  console.log(Math.pow(waysForOneSideOfTheRoad, 2));
};

const main = () => {
  const len = +readMe();
  arrangeBuldings(len);
};

main();
