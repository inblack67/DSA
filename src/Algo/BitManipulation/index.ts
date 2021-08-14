const bitify = (num: number, i: number): void => {
  const maskForOn = 1 << i;
  const on = num | maskForOn; // or
  console.log(on);

  const maskForOff = ~(1 << i);
  const off = num & maskForOff; // and
  console.log(off);

  const maskForToggle = 1 << i;
  const toggle = num ^ maskForToggle; // xor
  console.log(toggle);

  const maskForCheck = 1 << i;
  const onOrOff = num & maskForCheck;
  if (onOrOff) {
    console.log(true); // on
  } else {
    //   onOrOff => 0
    console.log(false); // off
  }
};

bitify(57, 3);
