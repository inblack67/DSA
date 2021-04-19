const printAbbreviations = (
  str: string,
  ans: string = '',
  count: number = 0,
  position: number = 0,
): void => {
  if (position === str.length) {
    if (count === 0) {
      console.log(ans);
    } else {
      console.log(ans + count);
    }
    return;
  }
  if (count > 0) {
    printAbbreviations(str, ans + count + str[position], 0, position + 1); // yes
  } else {
    printAbbreviations(str, ans + str[position], 0, position + 1); // yes
  }
  printAbbreviations(str, ans, count + 1, position + 1); // no
};

printAbbreviations('pep');
