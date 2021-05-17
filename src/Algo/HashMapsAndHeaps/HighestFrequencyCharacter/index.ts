const charWithHighestFrequency = (str: string): void => {
  const hash = new Map<string, number>();
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    const get = hash.get(el);
    if (get === undefined) {
      hash.set(el, 1);
    } else {
      hash.set(el, get + 1);
    }
  }

  let maxEl = '';
  let maxFreq = 0;
  hash.forEach((val, key) => {
    if (val > maxFreq) {
      maxFreq = val;
      maxEl = key;
    }
  });
  
  console.log(maxEl);
};

charWithHighestFrequency('zmszeqxllzvheqwrofgcuntypejcxovtaqbnqyqlmrwitc');
