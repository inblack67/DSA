const TOH = (disks: number, tower1: number, tower2: number, tower3: number) => {
  if (disks === 0) {
    return;
  }
  TOH(disks - 1, tower1, tower3, tower2);
  console.log(`${tower1} => ${tower3}`); // this will always be one iteration as the largest disk will be moved => just one that's why no recursion call here
  TOH(disks - 1, tower2, tower1, tower3);
};

// TOH(2, 1, 2, 3);
TOH(3, 10, 11, 12);
