const pzz = (n: number) => {
  if (n === 0) {
    return;
  }
  process.stdout.write(n.toString());
  pzz(n - 1);
  process.stdout.write(n.toString());
  pzz(n - 1);
  process.stdout.write(n.toString());
};

pzz(2);
