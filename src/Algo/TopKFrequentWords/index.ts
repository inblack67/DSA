interface IMyWords {
  word: string;
  frequency: number;
}

const topKFrequent = (words: string[], k: number): string[] => {
  const hashMap = new Map<string, number>();
  words.forEach((word) => {
    const prev = hashMap.get(word);
    if (!prev) {
      hashMap.set(word, 1);
    } else {
      hashMap.set(word, prev + 1);
    }
  });

  const wordsArray: IMyWords[] = [];
  hashMap.forEach((value, key) => {
    wordsArray.push({
      word: key,
      frequency: value,
    });
  });

  const sortedArr = wordsArray.sort((a, b) => {
    if (a.frequency === b.frequency) {
      return a.word <= b.word ? -1 : 1;
    } else {
      return b.frequency - a.frequency;
    }
  });

  const res: string[] = sortedArr.slice(0, k).map((el) => el.word);

  return res;
};

console.log(topKFrequent(['aaa', 'aa', 'a'], 1));

console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2));
console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 3));
console.log(
  topKFrequent(
    ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'],
    4,
  ),
);
