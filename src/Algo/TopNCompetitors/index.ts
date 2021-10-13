interface IMyScore {
  name: string;
  score: number;
}

const topNCompetitors = (
  _numCompetitors: number,
  n: number,
  competitors: string[],
  _numReviews: number,
  reviews: string[],
): string[] => {
  const sortedCompetitors = competitors.sort();
  const scoresMap: Map<string, number> = new Map();
  reviews.forEach((review) => {
    sortedCompetitors.forEach((competitor) => {
      if (review.match(new RegExp(competitor, 'gi'))) {
        const prevScore = scoresMap.get(competitor);
        if (!prevScore) {
          scoresMap.set(competitor, 1);
        } else {
          scoresMap.set(competitor, prevScore + 1);
        }
      }
    });
  });
  const scoresArray: IMyScore[] = [];
  scoresMap.forEach((value, key) => {
    scoresArray.push({
      name: key,
      score: value,
    });
  });
  const sortedScoresArray = scoresArray.sort((a, b) => b.score - a.score);
  const res: string[] = [];
  for (let i = 0; i < n && i < sortedScoresArray.length; i++) {
    const el = sortedScoresArray[i];
    const nextIndex = i + 1;
    if (nextIndex < n && nextIndex < sortedScoresArray.length) {
      const nextEl = sortedScoresArray[nextIndex];
      if (nextEl.score === el.score) {
        console.log(nextEl.name);
        if (el.name <= nextEl.name) {
          console.log(el.name);
          res.push(el.name);
        } else {
          res.push(nextEl.name);
        }
        continue;
      }
    }
    res.push(el.name);
  }
  return res;
};

console.log(
  topNCompetitors(
    6,
    2,
    ['newshop', 'shopnow', 'afashion', 'fashionbeats', 'mymarket', 'tcellular'],
    6,
    [
      'newshop is providing good services in the city; everyone should use newshop',
      'best services by newshop',
      'fashionbeats has great services in the city',
      'I am proud to have fashionbeats',
      'mymarket has awesome services',
      'Thanks Newshop for the quick delivery mymarket',
    ],
  ),
); //  ["newshop", "fashionbeats"]
