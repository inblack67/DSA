const countSubs = (str: string): void => {
  let a = 0,
    ab = 0,
    abc = 0;
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (el === 'a') {
      a = 2 * a + 1;
    } else if (el === 'b') {
      ab = 2 * ab + a;
    } else if (el === 'c') {
      abc = 2 * abc + ab;
    }
  }
  console.log(abc);
};

countSubs('abcabc');
