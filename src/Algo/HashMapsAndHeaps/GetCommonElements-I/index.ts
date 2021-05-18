const printCommonElements = (arr1: number[], arr2: number[]): void => {
  const hash1 = new Map<number, number>();
  const hash2 = new Map<number, number>();
  arr1.forEach((el) => {
    const count = hash1.get(el);
    if (count === undefined) {
      hash1.set(el, 1);
    } else {
      hash1.set(el, count + 1);
    }
  });
  arr2.forEach((el) => {
    const count = hash2.get(el);
    if (count === undefined) {
      hash2.set(el, 1);
    } else {
      hash2.set(el, count + 1);
    }
  });
  hash2.forEach((_, key) => {
    const hash1Query = hash1.get(key);
    if (hash1Query) {
      console.log(key);
    }
  });
};

printCommonElements(
  [5, 5, 9, 8, 5, 5, 8, 0, 3],
  [9, 7, 1, 0, 3, 6, 5, 9, 1, 1, 8, 0, 2, 4, 2, 9, 1, 5],
);
