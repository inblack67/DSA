const longestPalindrome = (s: string): number => {
  const dp = new Array(s.length)
    .fill(null)
    .map(() => new Array(s.length).fill(false));

  let count: number = 0;

  for (let g = 0; g < dp.length; g++) {
    for (let i = 0, j = g; j < dp.length; i++, j++) {
      if (g === 0) {
        dp[i][j] = true;
      } else if (g === 1) {
        if (s[i] === s[j]) {
          dp[i][j] = true;
        } else {
          if (s[i] === s[j] && dp[i + 1][j - 1]) {
            dp[i][j] = true;
          }
        }
      }
      if (dp[i][j]) {
        count++;
      }
    }
  }

  return count;
};

// console.log(longestPalindrome('abccbc'));
console.log(longestPalindrome('aaa'));
console.log(longestPalindrome('abc'));
