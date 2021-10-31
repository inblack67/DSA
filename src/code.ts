const minMoves = (arr: number[], k: number): number => {
  let res = 0;
  for (let i = 0; i < arr.length && i + k < arr.length; i++) {
    const el1 = arr[i];
    const el2 = arr[i + k];
    if (el2 > el1) {
      res++;
    }
  }
  return res;
};

minMoves([])
