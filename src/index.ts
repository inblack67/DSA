import { performBubbleSort } from './Algo/Sorting/BubbleSort';

const main = async () => {
  const myArray = [7, -2, 4, 1, 3];
  performBubbleSort(myArray);
};

main().catch((err) => console.error(err));
