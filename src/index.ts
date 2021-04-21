import { maxGold } from './Algo/DynamicProgramming/GoldMine/goldmine';

const main = async () => {
  maxGold([
    [0, 1, 4, 2, 8, 2],
    [4, 3, 6, 5, 0, 4],
    [1, 2, 4, 1, 4, 6],
    [2, 0, 7, 3, 2, 2],
    [3, 1, 5, 9, 2, 4],
    [2, 7, 0, 8, 5, 1],
  ]);
};

main().catch((err) => console.error(err));
