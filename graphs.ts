class GraphEdge {
  source: number;
  neighbor: number;
  weight: number;
  constructor(source: number, neighbor: number, weight: number) {
    this.source = source;
    this.neighbor = neighbor;
    this.weight = weight;
  }
}

const makeMyGraph = (
  edgesData: number[][],
  vertices: number = 7,
): GraphEdge[][] => {
  const graph: GraphEdge[][] = new Array<GraphEdge[]>(vertices);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = new Array<GraphEdge>();
  }
  for (let i = 0; i < edgesData.length; i++) {
    const edge = edgesData[i];
    const source = edge[0];
    const neighbor = edge[1];
    const weight = edge[2];
    const graphEdge = new GraphEdge(source, neighbor, weight);
    graph[source].push(graphEdge);
  }
  return graph;
};

const edgesData = [
  [0, 1, 10],
  [1, 2, 10],
  [2, 3, 10],
  [0, 3, 10],
  [3, 4, 10],
  [4, 5, 10],
  [5, 6, 10],
  [4, 6, 10],
];

const myGraph = makeMyGraph(edgesData);

const makeMyVisited = (len: number): boolean[] =>
  new Array<boolean>(len).fill(false);

const hasPathVisited = makeMyVisited(7);

const hasPath = (
  graph: GraphEdge[][],
  source: number,
  dest: number,
  visited: boolean[],
): boolean => {
  if (source === dest) {
    return true;
  }
  visited[source] = true;
  for (let i = 0; i < graph[source].length; i++) {
    const el = graph[source][i];
    if (!visited[el.neighbor]) {
      const has = hasPath(graph, el.neighbor, dest, visited);
      if (has) {
        return true;
      }
    }
  }
  return false;
};

console.log(hasPath(myGraph, 0, 6, hasPathVisited));

const printAllPathsInLexo = (
  graph: GraphEdge[][],
  source: number,
  dest: number,
  visited: boolean[],
  ans: string = '',
): void => {
  if (source === dest) {
    console.log(ans + source);
    return;
  }
  visited[source] = true;
  for (let i = 0; i < graph[source].length; i++) {
    const el = graph[source][i];
    if (!visited[el.neighbor]) {
      printAllPathsInLexo(graph, el.neighbor, dest, visited, ans + el.source);
    }
  }
  visited[source] = false;
};

printAllPathsInLexo(myGraph, 0, 6, makeMyVisited(7));

let minWeight: number = Number.MAX_SAFE_INTEGER;
let minPath: string = '';
let maxPathCost: number = 0;
let maxPath: string = '';
const printSmallestPath = (
  graph: GraphEdge[][],
  source: number,
  dest: number,
  visited: boolean[],
  ans: string = '',
  weight: number = 0,
): void => {
  if (source === dest) {
    if (weight < minWeight) {
      minWeight = weight;
      minPath = ans + source;
    }
    if (weight > maxPathCost) {
      maxPathCost = weight;
      maxPath = ans + source;
    }
    return;
  }
  visited[source] = true;
  for (let i = 0; i < graph[source].length; i++) {
    const el = graph[source][i];
    if (!visited[el.neighbor]) {
      printSmallestPath(
        graph,
        el.neighbor,
        dest,
        visited,
        ans + el.source,
        weight + el.weight,
      );
    }
  }
  visited[source] = false;
};

printSmallestPath(myGraph, 0, 6, makeMyVisited(7));
console.log(minPath, minWeight);
console.log(maxPath, maxPathCost);

const getConnectedComponents = (
  graph: GraphEdge[][],
  vertices: number,
  visited: boolean[],
): number[][] => {
  const components: number[][] = [];
  for (let i = 0; i < vertices; i++) {
    const component: number[] = [];
    if (!visited[i]) {
      makeMyComponents(graph, i, visited, component);
    }
    if (component.length > 0) {
      components.push(component);
    }
  }
  return components;
};

const makeMyComponents = (
  graph: GraphEdge[][],
  vertice: number,
  visited: boolean[],
  component: number[],
) => {
  visited[vertice] = true;
  component.push(vertice);
  for (let i = 0; i < graph[vertice].length; i++) {
    const child = graph[vertice][i];
    if (!visited[child.neighbor]) {
      makeMyComponents(graph, child.neighbor, visited, component);
    }
  }
};

console.log(
  getConnectedComponents(
    makeMyGraph(
      [
        [0, 1, 10],
        [2, 3, 10],
        [4, 5, 10],
        [5, 6, 10],
        [4, 6, 10],
      ],
      7,
    ),
    7,
    makeMyVisited(7),
  ),
);
