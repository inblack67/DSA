const getMazePaths = (
  sourceRow: number,
  sourceCol: number,
  destRow: number,
  destCol: number,
): string[] => {
  if (destRow === sourceRow && destCol === sourceCol) {
    return [''];
  }
  let horizontalPaths: string[] = [];
  let verticalPaths: string[] = [];
  if (destCol < sourceCol) {
    horizontalPaths = getMazePaths(sourceRow, sourceCol, destRow, destCol + 1);
  }
  if (destRow < sourceRow) {
    verticalPaths = getMazePaths(sourceRow, sourceCol, destRow + 1, destCol);
  }
  const res: string[] = [];
  for (let i = 0; i < horizontalPaths.length; i++) {
    const el = horizontalPaths[i];
    res.push(`h${el}`);
  }
  for (let i = 0; i < verticalPaths.length; i++) {
    const el = verticalPaths[i];
    res.push(`v${el}`);
  }
  return res;
};

const mazePaths = getMazePaths(3, 3, 1, 1); // standing at 0,0 init
console.log(mazePaths);
