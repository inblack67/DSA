const printPermutations = (str: string, ans: string = ''): void => {
  if (str.length === 0) {
    console.log(ans);
  }
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    const left = str.substring(0, i);
    const right = str.substring(i + 1);
    const rest = left + right;
    printPermutations(rest, ans + el);
  }
};

printPermutations('abc');
