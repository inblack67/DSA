class Graph {
  matrix: number[][];
  constructor(matrix: number[][]) {
    this.matrix = matrix;
  }
  breadthFirstSearch(startIndex: number = 1): void {
    const queue: number[] = [];
    const visited: boolean[] = new Array(this.matrix.length + 1).fill(false);
    console.log(startIndex);
    visited[startIndex] = true;
    queue.push(startIndex);
    while (queue.length > 0) {
      const row = queue.shift() as number;
      for (let col = 1; col < this.matrix.length; col++) {
        if (this.matrix[row][col] === 1 && visited[col] === false) {
          console.log(col);
          visited[col] = true;
          queue.push(col);
        }
      }
    }
  }
  depthFirstSearch() {}
  display() {
    console.log(this.matrix);
  }
}

const g1 = new Graph([
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
]);

g1.breadthFirstSearch(5);
