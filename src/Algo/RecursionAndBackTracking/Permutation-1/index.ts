const printBoxConfs = (
  numberOfBoxes: number,
  numberOfItems: number,
  boxes: number[],
  item: number = 1,
): void => {
  if (item > numberOfItems) {
    console.log(boxes);
    return;
  }
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] === 0) {
      boxes[i] = item;
      printBoxConfs(numberOfBoxes, numberOfItems, boxes, item + 1);
      boxes[i] = 0;
    }
  }
};

const numberOfBoxes = 5;
const numberOfItems = 3;
const boxes: number[] = new Array(numberOfBoxes).fill(0);
printBoxConfs(numberOfBoxes, numberOfItems, boxes);
