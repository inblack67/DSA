const itemRecommendations = (input: string[][]): string[] => {
  const frequency: Map<string, number> = new Map();
  input.forEach((pair) => {
    pair.forEach((item) => {
      const prev = frequency.get(item);
      if (!prev) {
        frequency.set(item, 1);
      } else {
        frequency.set(item, prev + 1);
      }
    });
  });

  let maxItem: string;
  let maxValue: number = 0;

  frequency.forEach((value, key) => {
    if (value > maxValue) {
      maxItem = key;
      maxValue = value;
    } else if (value === maxValue) {
      if (maxItem && maxItem <= key) {
        return;
      } else {
        maxItem = key;
      }
    }
  });

  const res: string[] = [maxItem!];

  input.forEach((pair) => {
    if (pair[0] === maxItem) {
      res.push(pair[1]);
    } else if (pair[1] === maxItem) {
      res.push(pair[0]);
    }
  });

  return res.sort();
};

console.log(
  itemRecommendations([
    ['Item1', 'Item2'],
    ['Item3', 'Item4'],
    ['Item4', 'Item5'],
  ]),
);
