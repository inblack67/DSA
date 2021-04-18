import { knightsTour } from './Algo/Recursion/KnightsTour/knightsTour';

const getMyChess = (order: number): number[][] => {
  const chess = new Array(order).fill(new Array(order).fill(0));
  console.log('my chess = ', chess);
  return chess;
};

const main = async () => {
  const chess = getMyChess(5);
  knightsTour(chess, chess.length, 2, 0, 1);
};

main().catch((err) => console.error(err));
