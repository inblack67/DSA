import { performInsertionSort_2 } from './Algo/Sorting/InsertionSort';

const main = async () => {
  const myArray = [7, -2, 4, 1, 3];
  performInsertionSort_2(myArray);
};

main().catch((err) => console.error(err));
