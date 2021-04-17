const getNumAlphaMapping = () => {
  const dict: any = {};
  let count = 0;
  for (let i = 97; i <= 122; i++) {
    count++;
    const ch = String.fromCharCode(i);
    dict[count] = ch;
  }
  return dict;
};

const printEncodings = (str: string, ans: string = ''): void => {
  const dict = getNumAlphaMapping();
  if (str.length === 0) {
    console.log(ans);
    return;
  } else if (str.length === 1) {
    if (str === '0') {
      return;
    } else {
      console.log(ans + dict[str]);
    }
  } else {
    // > 1
    // for one char each
    const first = str[0];
    if (first === '0') {
      return;
    } else {
      const rest = str.substring(1);
      printEncodings(rest, ans + dict[first]);
    }
    const first2 = str.substring(0, 2);
    const rest2 = str.substring(2);
    if (+first2 <= 26) {
      printEncodings(rest2, ans + dict[first2]);
    }
  }
};

printEncodings('123');
// printEncodings('655196');
