// order matters
const printCommonElements2 = (arr1: number[], arr2: number[]): void => {
  const hash1 = new Map<number, number>();
  arr1.forEach((el) => {
    const count = hash1.get(el);
    if (count === undefined) {
      hash1.set(el, 1);
    } else {
      hash1.set(el, count + 1);
    }
  });

  arr2.forEach((el) => {
    const count = hash1.get(el);
    if (count) {
      console.log(el);
      hash1.set(el, count - 1);
    }
  });
};

printCommonElements2(
  [8, 9, 6, 1, 9, 4, 9, 1, 9, 4, 8, 7],
  [4, 2, 5, 9, 6, 4, 7, 9, 2],
);
// printCommonElements2([1, 1, 2, 2, 2, 3, 5], [1, 1, 1, 2, 2, 4, 5]);
// printCommonElements2(
//   [5, 5, 9, 8, 5, 5, 8, 0, 3],
//   [9, 7, 1, 0, 3, 6, 5, 9, 1, 1, 8, 0, 2, 4, 2, 9, 1, 5],
// );

const printCommonElements_3 = (arr1: number[], arr2: number[]): void => {
  const hashMap1 = new Map<number, number>();
  const hashMap2 = new Map<number, number>();

  arr1.forEach((el) =>
    hashMap1.set(el, hashMap1.has(el) ? hashMap1.get(el)! + 1 : 1),
  );
  arr2.forEach((el) =>
    hashMap2.set(el, hashMap2.has(el) ? hashMap2.get(el)! + 1 : 1),
  );

  if (arr1.length <= arr2.length) {
    arr1.forEach((el) => {
      const prev = hashMap2.get(el);
      if (hashMap2.has(el) && prev! > 0) {
        console.log(el);
        hashMap2.set(el, prev! - 1);
      }
    });
  } else {
    arr2.forEach((el) => {
      const prev = hashMap1.get(el);
      if (hashMap1.has(el) && prev! > 0) {
        console.log(el);
        hashMap1.set(el, prev! - 1);
      }
    });
  }
};

printCommonElements_3([1, 1, 2, 2, 2, 3, 5], [1, 1, 1, 2, 2, 4, 5]);
