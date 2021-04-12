const pzz = (n: number) => {
  if (n === 0) {
    return;
  }
  console.log(n);
  pzz(n - 1);
  console.log(n);
  pzz(n - 1);
  console.log(n);
};

pzz(2);
