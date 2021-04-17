const getMazePathsWithJumps = (
  sourceRow: number,
  sourceCol: number,
  destRow: number,
  destCol: number,
): string[] => {
  if (sourceCol === destCol && sourceRow === destRow) {
    return [''];
  }

  const res: string[] = [];

  for (let i = 1; i <= destCol - sourceCol; i++) {
    const jumps = sourceCol + i;
    const hp = getMazePathsWithJumps(sourceRow, jumps, destRow, destCol);
    for (let j = 0; j < hp.length; j++) {
      const el = hp[j];
      res.push('h' + i + el);
    }
  }

  for (let i = 1; i <= destRow - sourceRow; i++) {
    const jumps = sourceRow + i;
    const vp = getMazePathsWithJumps(jumps, sourceCol, destRow, destCol);
    for (let j = 0; j < vp.length; j++) {
      const el = vp[j];
      res.push('v' + i + el);
    }
  }

  for (let i = 1; i <= destRow - sourceRow && i <= destCol - sourceCol; i++) {
    const vp = getMazePathsWithJumps(
      sourceRow + 1,
      sourceCol + 1,
      destRow,
      destCol,
    );
    for (let j = 0; j < vp.length; j++) {
      const el = vp[j];
      res.push('d' + i + el);
    }
  }

  return res;
};

const mazePathsWithJumps = getMazePathsWithJumps(1, 1, 2, 2);
console.log(mazePathsWithJumps);

const printMazePathsWithJumps = (
  sourceRow: number,
  sourceCol: number,
  destRow: number,
  destCol: number,
  paths: string = '',
): void => {
  if (sourceRow === destRow && sourceCol === destCol) {
    console.log(paths);
  }
  const horizontalPossibilities = destCol - sourceCol;
  for (let i = 1; i <= horizontalPossibilities; i++) {
    printMazePathsWithJumps(
      sourceRow,
      sourceCol + i,
      destRow,
      destCol,
      paths + 'h' + i, // paths + horizontal move + number of jumps
    );
  }

  const verticalPossibilities = destRow - sourceRow;
  for (let i = 1; i <= verticalPossibilities; i++) {
    printMazePathsWithJumps(
      sourceRow + i,
      sourceCol,
      destRow,
      destCol,
      paths + 'v' + i,
    );
  }

  // diagonal possibilities
  for (
    let i = 1;
    i <= verticalPossibilities && i <= horizontalPossibilities;
    i++
  ) {
    printMazePathsWithJumps(
      sourceRow + i,
      sourceCol + i,
      destRow,
      destCol,
      paths + 'd' + i,
    );
  }
};

printMazePathsWithJumps(1, 1, 2, 2);
