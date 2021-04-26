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
  // prims() {
  //   const near = new Array(this.matrix.length).fill(-1);

  //   // res
  //   const spanningTree = new Array(2)
  //     .fill(null)
  //     .map(() => new Array(this.matrix.length));

  //   let minCost = Number.MAX_SAFE_INTEGER;
  //   let minCostRow = -1,
  //     minCostCol = -1;

  //   // getting minimum cost from upper triangular mat => can use the lower too => no need for full searching as cost(1-6) === cost(6-1)
  //   for (let row = 1; row < this.matrix.length; row++) {
  //     for (let col = row; col < this.matrix.length; col++) {
  //       const el = this.matrix[row][col];
  //       if (el < minCost && el !== 0) {
  //         minCost = el;
  //         minCostRow = row;
  //         minCostCol = col;
  //       }
  //     }
  //   }

  //   spanningTree[0][0] = minCostRow;
  //   spanningTree[1][0] = minCostCol;

  //   near[minCostRow] = 0; // included
  //   near[minCostCol] = 0; // included

  //   // near paths from min cost coordinates => row or col
  //   for (let i = 1; i < near.length; i++) {
  //     const el = near[i];
  //     const currentCost1 = this.matrix[i][minCostRow];
  //     const currentCost2 = this.matrix[i][minCostCol];
  //     if (el !== 0) {
  //       if (
  //         currentCost1 < currentCost2 &&
  //         currentCost1 !== 0 &&
  //         currentCost2 !== 0
  //       ) {
  //         near[i] = minCostRow;
  //       } else {
  //         near[i] = minCostCol;
  //       }
  //     }
  //   }

  //   // looping over nearby edges
  //   for (let i = 1; i < near.length - 1; i++) {
  //     let minEdgeCost = Number.MAX_SAFE_INTEGER;
  //     let minCostIndex = -1;
  //     // min edge from nearby edge
  //     for (let j = 1; j < near.length; j++) {
  //       const el = near[j];
  //       const minCost = this.matrix[j][el];
  //       if (el !== 0 && minCost < minEdgeCost) {
  //         minEdgeCost = minCost;
  //         minCostIndex = j;
  //       }
  //     }
  //     spanningTree[0][i] = minCostIndex;
  //     spanningTree[1][i] = near[minCostIndex];
  //     near[minCostIndex] = 0;

  //     for (let k = 1; k < near.length; k++) {
  //       const el = near[k];
  //       const currCost = this.matrix[el][k];
  //       if (el !== 0 && this.matrix[k][minCostIndex] < currCost) {
  //         near[k] = minCostIndex;
  //       }
  //     }
  //   }
  //   console.log(spanningTree);
  //   for (let i = 0; i < this.matrix.length - 2; i++) {
  //     console.log(spanningTree[0][i], spanningTree[1][i]);
  //   }
  // }
  display() {
    console.log(this.matrix);
  }
}

// const matrix = [
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 25, 0, 0, 0, 5, 0],
//   [0, 25, 0, 12, 0, 0, 0, 10],
//   [0, 0, 12, 0, 8, 0, 0, 0],
//   [0, 0, 0, 8, 0, 16, 0, 14],
//   [0, 0, 0, 0, 16, 0, 20, 18],
//   [0, 5, 0, 0, 0, 20, 0, 0],
//   [0, 0, 10, 0, 14, 18, 0, 0],
// ];
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

// g1.prims();
