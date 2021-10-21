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

const makeVisited = (len: number): boolean[] =>
  new Array<boolean>(len).fill(false);

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
