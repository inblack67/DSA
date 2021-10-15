const printCommonElements = (arr1: number[], arr2: number[]): void => {
  const hashMap1 = new Map<number, boolean>();
  const hashMap2 = new Map<number, boolean>();

  arr1.forEach((el) => hashMap1.set(el, true));
  arr2.forEach((el) => hashMap2.set(el, true));

  arr2.forEach((el) => {
    if (hashMap1.has(el)) {
      console.log(el);
      hashMap1.delete(el);
    }
  });
};

printCommonElements(
  [5, 5, 9, 8, 5, 5, 8, 0, 3],
  [9, 7, 1, 0, 3, 6, 5, 9, 1, 1, 8, 0, 2, 4, 2, 9, 1, 5],
);
