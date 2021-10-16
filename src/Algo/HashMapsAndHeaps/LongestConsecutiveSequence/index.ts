const longestConsecutiveSequence = (arr: number[]): void => {
  const hashMap = new Map<number, boolean>();
  arr.forEach((el) => hashMap.set(el, true));
  arr.forEach((el) => {
    const prev = el - 1;
    if (hashMap.has(prev)) {
      hashMap.set(el, false);
    }
  });

  let maxLength = Number.MIN_SAFE_INTEGER;
  let startingPoint: number;
  arr.forEach((el) => {
    if (hashMap.has(el)) {
      let next = 1;
      while (hashMap.has(el + next)) {
        next++;
      }
      if (next > maxLength) {
        startingPoint = el;
        maxLength = next;
      }
    }
  });

  for (let i = 0; i < maxLength; i++) {
    console.log(startingPoint! + i);
  }
};

longestConsecutiveSequence([
  17, 12, 5, 1, 2, 10, 2, 13, 7, 11, 8, 9, 11, 8, 9, 5, 6, 11,
]);
