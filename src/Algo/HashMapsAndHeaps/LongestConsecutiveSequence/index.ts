const longestConsecutiveSequence = (arr: number[]): void => {
  const hash = new Map<number, boolean>();
  arr.forEach((el) => hash.set(el, true));
  arr.forEach((el) => {
    const prev = el - 1;
    if (hash.get(prev)) {
      hash.set(el, false); // cant be the starting of the seq
    }
  });

  let maxLength = 0;
  let startingPoint: number = 0;

  arr.forEach((el) => {
    if (hash.get(el)) {
      let next = 1;
      while (hash.get(el + next)) {
        next++;
      }
      if (next > maxLength) {
        maxLength = next;
        startingPoint = el;
      }
    }
  });

  console.log(startingPoint);
  console.log(maxLength);

  for (let i = 0; i <= maxLength; i++) {
    console.log(startingPoint + i);
  }
};

longestConsecutiveSequence([
  17, 12, 5, 1, 2, 10, 2, 13, 7, 11, 8, 9, 11, 8, 9, 5, 6, 11,
]);
