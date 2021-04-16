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
