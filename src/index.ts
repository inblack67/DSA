import { getNumberOfSetBits } from './Algo/BitManipulation/Kernighans';

const main = async () => {
  console.log(getNumberOfSetBits(58));
};

main().catch((err) => console.error(err));
