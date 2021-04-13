const getSubSequence = (str: string): string[] => {
  // abc
  // expectation => - - - => yes/no per char => abc => 8 possibilities
  // faith => bc => all combos of bc
  // faith + expectation => bc's subs with a and without a
  if (str.length === 0) {
    return ['']; // nobody said yes
  }
  const first = str[0];
  const rest = str.substring(1);
  const partSubs = getSubSequence(rest); // subs of bc
  const res: string[] = [];
  for (let i = 0; i < partSubs.length; i++) {
    const el1 = partSubs[i]; // without a
    const el2 = `${first}${partSubs[i]}`; // with a
    res.push(el1, el2);
  }
  return res;
};

console.log(getSubSequence('abc'));
