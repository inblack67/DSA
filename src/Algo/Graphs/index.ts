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

const graph = makeGraph(7, [
  [0, 1, 10],
  [1, 2, 10],
  [2, 3, 10],
  [0, 3, 10],
  [3, 4, 10],
  [4, 5, 10],
  [5, 6, 10],
  [4, 6, 10],
]);

const makeVisited = (len: number): boolean[] =>
  new Array<boolean>(len).fill(false);

console.log(hasPath(graph, 0, 6, makeVisited(7)));
printAllPaths(graph, 0, 6, makeVisited(7));
