const arrangeBuldings = (roadLength: number): void => {
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

// arrangeBuldings(6); // 441

// BigInt is a built-in object whose constructor returns a bigint primitive — also called a BigInt value, or sometimes just a BigInt — to represent whole numbers larger than 253 - 1 ( Number. MAX_SAFE_INTEGER ), which is the largest number JavaScript can represent with a number primitive (or Number value).
arrangeBuldings(38);
