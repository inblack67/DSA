const abb = (str: string, index = 0, ans = '', count = 0): void => {
  if (str.length === index) {
    if (count > 0) {
      console.log(ans + count);
    } else {
      console.log(ans);
    }
    return;
  }

  if (count > 0) {
    abb(str, index + 1, ans + count + str[index], count); // yes
  } else {
    abb(str, index + 1, ans + str[index], count); // yes
  }
  abb(str, index + 1, ans, count + 1); // no
};

abb('pep');
