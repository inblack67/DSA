const getNumAlphaMapping2 = () => {
  const dict: any = {};
  let count = 0;
  for (let i = 97; i <= 122; i++) {
    count++;
    const ch = String.fromCharCode(i);
    dict[count] = ch;
  }
  return dict;
};

const countEncodingsDP = (str: string): void => {
  if (str[0] === '0') {
    return;
  }
  const dict = getNumAlphaMapping2();
  const dp = new Array(str.length).fill(0);
  dp[0] = 1; // str will never start with 0 so every first one is valid

  for (let i = 1; i < dp.length; i++) {
    const el = str[i];
    const prevEl = str[i - 1];
    if (dict[el]) {
      dp[i] = dp[i - 1];
    }
    if (dict[prevEl + el]) {
      if (i > 1) {
        dp[i] += dp[i - 2];
      } else {
        dp[i] += dp[i - 1];
      }
    }
  }
  console.log(dp[dp.length - 1]);
};

countEncodingsDP('123');
// countEncodingsDP('993');
// countEncodingsDP('013');
// countEncodingsDP('103');
// countEncodingsDP('303');
// countEncodingsDP('21657');
// countEncodingsDP('231011');
