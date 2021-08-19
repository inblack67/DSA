const keys: Record<number, string> = {
  0: '.;',
  1: 'abc',
  2: 'def',
  3: 'ghi',
  4: 'jkl',
  5: 'mno',
  6: 'pqrs',
  7: 'tu',
  8: 'vwx',
  9: 'yz',
};

const myKPC = (str: string): string[] => {
  if (str.length === 0) {
    return [''];
  }
  const first = str[0];
  const rest = str.slice(1);
  const restRes = myKPC(rest);

  const res: string[] = [];

  const firstCandidates = keys[+first];

  for (let i = 0; i < firstCandidates.length; i++) {
    const el = firstCandidates[i];
    for (let j = 0; j < restRes.length; j++) {
      const el2 = restRes[j];
      res.push(el + el2);
    }
  }

  return res;
};

console.log(myKPC('78'));
