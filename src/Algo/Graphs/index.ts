class GraphEdge {
  source: number;
  neighbour: number;
  weight: number;
  constructor(source: number, neighbour: number, weight: number) {
    this.source = source;
    this.neighbour = neighbour;
    this.weight = weight;
  }
}

const makeGraph = (vertices: number, edgesData: number[][]): GraphEdge[][] => {
  const graph = new Array<GraphEdge[]>(vertices);

  for (let i = 0; i < graph.length; i++) {
    graph[i] = new Array<GraphEdge>();
  }

  for (let i = 0; i < edgesData.length; i++) {
    const v1 = edgesData[i][0];
    const v2 = edgesData[i][1];
    const v3 = edgesData[i][2];

    graph[v1].push(new GraphEdge(v1, v2, v3));
    graph[v2].push(new GraphEdge(v2, v1, v3));
  }

  return graph;
};

const makeVisited = (vertices: number, fillNumbers = false) =>
  new Array(vertices).fill(fillNumbers ? 0 : false);

const make2DVisited = (rows: number, cols: number): boolean[][] =>
  new Array(rows).fill(null).map(() => new Array<boolean>(cols).fill(false));

const hasPath = (
  graph: GraphEdge[][],
  source: number,
  destination: number,
  visited: boolean[],
): boolean => {
  if (source === destination) {
    return true;
  }

  visited[source] = true;
  for (let i = 0; i < graph[source].length; i++) {
    const el = graph[source][i];
    if (visited[el.neighbour] === false) {
      const has = hasPath(graph, el.neighbour, destination, visited);
      if (has === true) {
        return true;
      }
    }
  }

  return false;
};

const printAllPaths = (
  graph: GraphEdge[][],
  source: number,
  destination: number,
  visited: boolean[],
  ans: string = `${source}`,
): void => {
  if (source === destination) {
    console.log(ans);
    return;
  }
  visited[source] = true;
  for (let i = 0; i < graph[source].length; i++) {
    const el = graph[source][i];
    if (visited[el.neighbour] === false) {
      printAllPaths(
        graph,
        el.neighbour,
        destination,
        visited,
        `${ans} ${el.neighbour}`,
      );
    }
  }
  visited[source] = false;
};

let maxWeight: number = Number.MIN_SAFE_INTEGER;
let maxWeightPath: string = '';
let minWeight: number = Number.MAX_SAFE_INTEGER;
let minWeightPath: string = '';

let justLargerThanRes: number = Number.MAX_SAFE_INTEGER;
let justLargerThanPath: string = '';
let justSmallerThanRes: number = Number.MIN_SAFE_INTEGER;
let justSmallerThanPath: string = '';

const largestPath = (
  graph: GraphEdge[][],
  source: number,
  destination: number,
  visited: boolean[],
  justLargerThan: number,
  justSmallerThan: number,
  weightSoFar: number = 0,
  pathSoFar: string = '',
): void => {
  if (source === destination) {
    if (weightSoFar > maxWeight) {
      maxWeight = weightSoFar;
      maxWeightPath = pathSoFar + ' ' + source;
    }
    if (weightSoFar < minWeight) {
      minWeight = weightSoFar;
      minWeightPath = pathSoFar + ' ' + source;
    }
    if (weightSoFar > justLargerThan && weightSoFar < justLargerThanRes) {
      justLargerThanRes = weightSoFar;
      justLargerThanPath = pathSoFar + ' ' + source;
    }
    if (weightSoFar < justSmallerThan && weightSoFar > justSmallerThanRes) {
      justSmallerThanRes = weightSoFar;
      justSmallerThanPath = pathSoFar + ' ' + source;
    }
    return;
  }

  visited[source] = true;

  for (let i = 0; i < graph[source].length; i++) {
    const el = graph[source][i];
    if (visited[el.neighbour] === false) {
      largestPath(
        graph,
        el.neighbour,
        destination,
        visited,
        justLargerThan,
        justSmallerThan,
        weightSoFar + el.weight,
        pathSoFar + ' ' + el.source,
      );
    }
  }
  visited[source] = false;
};

const makeComponent = (
  graph: GraphEdge[][],
  visited: boolean[],
  source: number,
  component: number[],
) => {
  visited[source] = true;
  component.push(source);
  for (let i = 0; i < graph[source].length; i++) {
    const edge = graph[source][i];
    if (visited[edge.neighbour] === false) {
      makeComponent(graph, visited, edge.neighbour, component);
    }
  }
};

const getConnectedComponents = (
  graph: GraphEdge[][],
  visited: boolean[],
  vertices: number,
): number[][] => {
  const components: number[][] = [];
  for (let i = 0; i < vertices; i++) {
    if (visited[i] === false) {
      const component: number[] = [];
      makeComponent(graph, visited, i, component);
      components.push(component);
    }
  }
  return components;
};

const traverseGraph = (
  graph: GraphEdge[][],
  source: number,
  visited: boolean[],
) => {
  visited[source] = true;
  for (let i = 0; i < graph[source].length; i++) {
    const edge = graph[source][i];
    if (visited[edge.neighbour] === false) {
      traverseGraph(graph, edge.neighbour, visited);
    }
  }
};

const isGraphConnected = (
  graph: GraphEdge[][],
  visited: boolean[],
): boolean => {
  traverseGraph(graph, 0, visited);
  for (let i = 0; i < visited.length; i++) {
    const el = visited[i];
    if (el === false) {
      return false;
    }
  }
  return true;
};

const isGraphConnected_2 = (
  graph: GraphEdge[][],
  visited: boolean[],
  vertices: number,
): boolean => {
  return getConnectedComponents(graph, visited, vertices).length === 1;
};

const traverseMatrix = (
  matrix: number[][],
  visited: boolean[][],
  row: number,
  col: number,
): void => {
  if (
    row < 0 ||
    row >= matrix.length ||
    col < 0 ||
    col >= matrix[row].length ||
    matrix[row][col] === 1 ||
    visited[row][col] === true
  ) {
    return;
  }

  visited[row][col] = true;

  traverseMatrix(matrix, visited, row - 1, col);
  traverseMatrix(matrix, visited, row, col - 1);
  traverseMatrix(matrix, visited, row + 1, col);
  traverseMatrix(matrix, visited, row, col + 1);
};

const getNumberOfIslands = (
  matrix: number[][],
  visited: boolean[][],
): number => {
  let count: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const el = matrix[i][j];
      if (el === 0 && visited[i][j] === false) {
        // land
        count++;
        traverseMatrix(matrix, visited, i, j);
      }
    }
  }
  return count;
};

const traversePerfectFriends = (
  graph: GraphEdge[][],
  visited: boolean[],
  source: number,
  component: number[],
): void => {
  visited[source] = true;
  component.push(source);
  for (let i = 0; i < graph[source].length; i++) {
    const el = graph[source][i];
    if (visited[el.neighbour] === false) {
      traversePerfectFriends(graph, visited, el.neighbour, component);
    }
  }
};

const perfectFriends = (
  graph: GraphEdge[][],
  visited: boolean[],
  vertices: number,
  _edges: number,
): number => {
  const components: number[][] = [];

  for (let i = 0; i < vertices; i++) {
    if (visited[i] === false) {
      const componenet: number[] = [];
      traversePerfectFriends(graph, visited, i, componenet);
      components.push(componenet);
    }
  }

  let res: number = 0;

  for (let i = 0; i < components.length; i++) {
    for (let j = i + 1; j < components.length; j++) {
      const el1 = components[i];
      const el2 = components[j];
      const possibilities = el1.length * el2.length;
      res += possibilities;
    }
  }

  return res;
};

const hamiltonian = (
  graph: GraphEdge[][],
  visited: Set<number>,
  vertices: number,
  _edges: number,
  source: number,
  originalSource: number,
  path: string = `${source}`,
): void => {
  if (visited.size === vertices - 1) {
    let isCycle: boolean = false;

    for (let i = 0; i < graph[source].length; i++) {
      const el = graph[source][i];
      if (el.neighbour === originalSource) {
        isCycle = true;
      }
    }

    if (isCycle === true) {
      path += ' *';
    } else {
      path += ' .';
    }

    console.log(path);

    return;
  }

  visited.add(source);

  for (let i = 0; i < graph[source].length; i++) {
    const el = graph[source][i];
    if (visited.has(el.neighbour) === false) {
      hamiltonian(
        graph,
        visited,
        vertices,
        _edges,
        el.neighbour,
        originalSource,
        `${path} ${el.neighbour}`,
      );
    }
  }

  visited.delete(source);
};

class BFSPair {
  vertice: number;
  pathSoFar: string;
  constructor(vertice: number, pathSoFar: string) {
    this.vertice = vertice;
    this.pathSoFar = pathSoFar;
  }
}

const bfs = (graph: GraphEdge[][], source: number): void => {
  const queue: BFSPair[] = [];
  queue.push(new BFSPair(source, `${source}`));
  const visited: boolean[] = new Array(graph.length).fill(false);
  while (queue.length > 0) {
    const somePair = queue.shift() as BFSPair;
    if (visited[somePair.vertice] === true) {
      continue;
    }
    visited[somePair.vertice] = true;
    console.log(`${somePair.vertice}@${somePair.pathSoFar}`);
    for (let i = 0; i < graph[somePair.vertice].length; i++) {
      const el = graph[somePair.vertice][i];
      if (visited[el.neighbour] === false) {
        queue.push(
          new BFSPair(el.neighbour, `${somePair.pathSoFar}${el.neighbour}`),
        );
      }
    }
  }
};

const detectCycle = (
  graph: GraphEdge[][],
  source: number,
  visited: boolean[],
): boolean => {
  const queue: number[] = [];
  queue.push(source);
  while (queue.length > 0) {
    const someEdge = queue.shift() as number;
    if (visited[someEdge] === false) {
      visited[someEdge] = true;
      for (let i = 0; i < graph[someEdge].length; i++) {
        const el = graph[someEdge][i];
        if (visited[el.neighbour] === false) {
          queue.push(el.neighbour);
        }
      }
    } else {
      return true;
    }
  }

  return false;
};

const isGraphCyclic = (
  graph: GraphEdge[][],
  vertices: number,
  _edges: number,
): boolean => {
  const visited: boolean[] = new Array(vertices).fill(false);
  for (let i = 0; i < vertices; i++) {
    if (visited[i] === false) {
      const res = detectCycle(graph, i, visited);
      if (res === true) {
        return true;
      }
    }
  }
  return false;
};

class DijkstraPair {
  vertice: number;
  pathSoFar: string;
  weigthSoFar: number;
  constructor(vertice: number, pathSoFar: string, weightSoFar: number) {
    this.vertice = vertice;
    this.pathSoFar = pathSoFar;
    this.weigthSoFar = weightSoFar;
  }
}

export class MyMinHeap2 {
  heap: DijkstraPair[];
  constructor() {
    this.heap = [];
  }
  insert(el: DijkstraPair): void {
    this.heap.push(el);
    let index = this.heap.length - 1;
    let current = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (current.weigthSoFar < parent.weigthSoFar) {
        this.heap[index] = parent;
        this.heap[parentIndex] = current;
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  delete(): DijkstraPair | null {
    if (this.heap.length === 0) {
      return null;
    } else if (this.heap.length === 1) {
      return this.heap.pop() as DijkstraPair;
    }

    const res = this.heap[0];

    this.heap[0] = this.heap.pop() as DijkstraPair;

    let index = 0;
    let current = this.heap[index];

    while (index >= 0) {
      let leftChildIndex = Math.floor(2 * index + 1);
      let rightChildIndex = Math.floor(2 * index + 2);
      let swap: number | null = null;
      let leftChild: DijkstraPair;
      let rightChild: DijkstraPair;
      if (leftChildIndex < this.heap.length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.weigthSoFar < current.weigthSoFar) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < this.heap.length) {
        rightChild = this.heap[rightChildIndex];
        if (swap === null && rightChild.weigthSoFar < current.weigthSoFar) {
          swap = rightChildIndex;
        } else if (rightChild.weigthSoFar < leftChild!.weigthSoFar) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) {
        break;
      } else {
        this.heap[index] = this.heap[swap];
        this.heap[swap] = current;
        index = swap;
      }
    }

    return res;
  }
}

const dijkstraShortestPathInWeights = (
  graph: GraphEdge[][],
  source: number,
  _vertices: number,
  _edges: number,
  visited: boolean[],
): void => {
  const minHeap = new MyMinHeap2();
  minHeap.insert(new DijkstraPair(source, '0', 0));
  while (minHeap.heap.length > 0) {
    const popped = minHeap.delete() as DijkstraPair;
    if (visited[popped.vertice] === true) {
      continue;
    }
    console.log(popped);
    visited[popped.vertice] = true;
    for (let i = 0; i < graph[popped.vertice].length; i++) {
      const el = graph[popped.vertice][i];
      if (visited[el.neighbour] === false) {
        minHeap.insert(
          new DijkstraPair(
            el.neighbour,
            popped.pathSoFar + el.neighbour,
            popped.weigthSoFar + el.weight,
          ),
        );
      }
    }
  }
};

const shortedWireToConnectPCs = (
  graph: GraphEdge[][],
  _vertices: number,
  _edges: number,
) => {
  const queue = new MyMinHeap2();
  const visited = makeVisited(7);
  queue.insert(new DijkstraPair(0, '0', -1));

  while (queue.heap.length > 0) {
    const popped = queue.delete() as DijkstraPair;
    if (visited[popped.vertice] === false) {
      if (popped.weigthSoFar !== -1) {
        console.log(popped);
      }
      visited[popped.vertice] = true;
      for (let i = 0; i < graph[popped.vertice].length; i++) {
        const el = graph[popped.vertice][i];
        if (visited[el.neighbour] === false) {
          queue.insert(
            new DijkstraPair(el.neighbour, `${popped.vertice}`, el.weight),
          );
        }
      }
    }
  }
};

class InfectionPair {
  vertice: number;
  time: number;
  constructor(vertice: number, time: number) {
    this.vertice = vertice;
    this.time = time;
  }
}

const spreadOfInfection = (
  graph: GraphEdge[][],
  source: number,
  time: number,
  visited: number[],
): number => {
  const queue: InfectionPair[] = [];
  queue.push(new InfectionPair(source, 1));
  let count: number = 0;
  while (queue.length > 0) {
    const popped = queue.shift() as InfectionPair;
    if (visited[popped.vertice] > 0) {
      continue;
    }
    visited[popped.vertice] = popped.time;
    if (visited[popped.vertice] > time) {
      break;
    }
    count++;
    for (let i = 0; i < graph[popped.vertice].length; i++) {
      const el = graph[popped.vertice][i];
      if (visited[el.neighbour] === 0) {
        queue.push(new InfectionPair(el.neighbour, popped.time + 1));
      }
    }
  }
  return count;
};

console.log(
  spreadOfInfection(
    makeGraph(7, [
      [0, 1, 10],
      [1, 2, 10],
      [2, 3, 10],
      [0, 3, 10],
      [3, 4, 10],
      [4, 5, 10],
      [5, 6, 10],
      [4, 6, 10],
    ]),
    6,
    3,
    makeVisited(7, true),
  ),
);

shortedWireToConnectPCs(
  makeGraph(7, [
    [0, 1, 10],
    [1, 2, 10],
    [2, 3, 10],
    [0, 3, 40],
    [3, 4, 2],
    [4, 5, 3],
    [5, 6, 3],
    [4, 6, 8],
  ]),
  7,
  8,
);

dijkstraShortestPathInWeights(
  makeGraph(7, [
    [0, 1, 10],
    [1, 2, 10],
    [2, 3, 10],
    [0, 3, 40],
    [3, 4, 2],
    [4, 5, 3],
    [5, 6, 3],
    [4, 6, 8],
    [2, 5, 5],
  ]),
  0,
  7,
  9,
  makeVisited(7),
);

console.log(
  isGraphCyclic(
    makeGraph(7, [
      [0, 1, 10],
      [1, 2, 10],
      [2, 3, 10],
      [3, 4, 10],
      [4, 5, 10],
      [5, 6, 10],
      // [6, 0, 10],
    ]),
    7,
    6,
  ),
);

bfs(
  makeGraph(7, [
    [0, 1, 10],
    [1, 2, 10],
    [2, 3, 10],
    [0, 3, 10],
    [3, 4, 10],
    [4, 5, 10],
    [5, 6, 10],
    [4, 6, 10],
  ]),
  2,
);

hamiltonian(
  makeGraph(7, [
    [0, 1, 10],
    [1, 2, 10],
    [2, 3, 10],
    [0, 3, 10],
    [3, 4, 10],
    [4, 5, 10],
    [5, 6, 10],
    [4, 6, 10],
    [2, 5, 10],
  ]),
  new Set<number>(),
  7,
  9,
  0,
  0,
);

console.log(
  perfectFriends(
    makeGraph(7, [
      [0, 1],
      [2, 3],
      [4, 5],
      [5, 6],
      [4, 6],
    ]),
    makeVisited(7),
    7,
    5,
  ),
);

console.log(
  getNumberOfIslands(
    [
      [0, 0, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 0, 0, 0, 1, 1, 0],
      [1, 1, 1, 1, 0, 1, 1, 0],
      [1, 1, 1, 1, 0, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
    ],
    make2DVisited(8, 8),
  ),
);

console.log(
  isGraphConnected(
    makeGraph(7, [
      [0, 1, 10],
      [1, 2, 10],
      [2, 3, 10],
      [3, 4, 10],
      [4, 5, 10],
      [5, 6, 10],

      // [0, 1, 10],
      // [2, 3, 10],
      // [4, 5, 10],
      // [5, 6, 10],
      // [4, 6, 10],
    ]),
    makeVisited(7),
  ),
);

console.log(
  isGraphConnected_2(
    makeGraph(7, [
      // [0, 1, 10],
      // [1, 2, 10],
      // [2, 3, 10],
      // [3, 4, 10],
      // [4, 5, 10],
      // [5, 6, 10],

      [0, 1, 10],
      [2, 3, 10],
      [4, 5, 10],
      [5, 6, 10],
      [4, 6, 10],
    ]),
    makeVisited(7),
    7,
  ),
);

const graph = makeGraph(7, [
  [0, 1, 10],
  [1, 2, 10],
  [2, 3, 10],
  [0, 3, 40],
  [3, 4, 2],
  [4, 5, 3],
  [5, 6, 3],
  [4, 6, 8],
  [2, 5, 5],
]);
// const graph = makeGraph(7, [
//   [0, 1, 10],
//   [1, 2, 10],
//   [2, 3, 10],
//   [0, 3, 10],
//   [3, 4, 10],
//   [4, 5, 10],
//   [5, 6, 10],
//   [4, 6, 10],
// ]);

console.log(hasPath(graph, 0, 6, makeVisited(7)));
printAllPaths(graph, 0, 6, makeVisited(7));
largestPath(graph, 0, 6, makeVisited(7), 30, 30);
console.log(maxWeight);
console.log(maxWeightPath);
console.log(minWeight);
console.log(minWeightPath);

console.log(justLargerThanRes);
console.log(justLargerThanPath);
console.log(justSmallerThanRes);
console.log(justSmallerThanPath);
console.log(
  getConnectedComponents(
    makeGraph(7, [
      [0, 1, 10],
      [2, 3, 10],
      [4, 5, 10],
      [5, 6, 10],
      [4, 6, 10],
    ]),
    makeVisited(7),
    7,
  ),
);
