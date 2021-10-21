const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

let currentLine = 0;
const readMe = () => input[currentLine++];

const makeGraph = (vertices, edgesData) => {
  const graph = new Array(vertices);

  for (let i = 0; i < graph.length; i++) {
    graph[i] = new Array();
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

const makeVisited = (len) => new Array() < boolean > len.fill(false);

const traverseGraph = (graph, source, visited) => {
  visited[source] = true;
  for (let i = 0; i < graph[source].length; i++) {
    const edge = graph[source][i];
    if (visited[edge.neighbour] === false) {
      traverseGraph(graph, edge.neighbour, visited);
    }
  }
};

const isGraphConnected = (graph, visited) => {
  traverseGraph(graph, 0, visited);
  console.log(visited);
  for (let i = 0; i < visited.length; i++) {
    const el = visited[i];
    if (el === false) {
      return false;
    }
  }
  return true;
};

const main = () => {
  const vertices = +readMe();
  const edges = +readMe();
  const edgesData = [];
  for (let i = 0; i < edges; i++) {
    const edgeData = readMe()
      .split(' ')
      .map((el) => +el);
    edgesData.push(edgeData);
  }
  console.log(vertices);
  console.log(edges);
  console.log(edgesData);
  //   const res = isGraphConnected(makeGraph(vertices, edgesData), makeVisited(7));
//   console.log(res);
};

main();
