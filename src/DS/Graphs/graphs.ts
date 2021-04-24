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
  depthFirstSearch(startIndex: number = 1, visited: boolean[]) {
    if (visited[startIndex] === false) {
      console.log(startIndex);
      visited[startIndex] = true;
      for (let i = 1; i < this.matrix.length; i++) {
        if (visited[i] === false && this.matrix[startIndex][i] === 1) {
          this.depthFirstSearch(i, visited);
        }
      }
    }
  }
  display() {
    console.log(this.matrix);
  }
}

const matrix = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
];
const g1 = new Graph(matrix);

g1.breadthFirstSearch(5);

const visitedRows: boolean[] = new Array(matrix.length + 1).fill(false);
g1.depthFirstSearch(1, visitedRows);
