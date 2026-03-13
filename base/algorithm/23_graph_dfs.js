class WeightedDigraph {
  constructor(n) {
    this.graph = Array.from({ length: n }, () => []);
  }

  addEdge(from, to, weight = 1) {
    this.graph[from].push({ to, weight });
  }

  removeEdge(from, to) {
    this.graph[from] = this.graph[from].filter(e => e.to !== to);
  }

  hasEdge(from, to) {
    return this.graph[from].some(e => e.to == to);
  }

  weight(from, to) {
    for (const e of this.graph[from]) {
      if (e.to === to) {
        return e.weight;
      }
    }
    throw new Error("No Such edge");
  }

  neighbors(v) {
    return this.graph[v];
  }
}

function traverse(graph, s, visited) {
  if (!s || s >= graph.size) {
    return;
  }

  if (visited[s]) {
    return;
  }

  // 前序位置

  visited[s] = true;
  for (const e of graph.neighbors(s)) {
    traverse(graph, e.to, visited);
  }

  // 后序位置
}

function traverseEdges(graph, s, visited) {
  if (!s || s >= graph.size) {
    return;
  }

  for (const e of graph.neighbors(s)) {
    if (visited[s][e.to]) {
      continue;
    }

    visited[s][e.to] = true;
    traverseEdges(graph, e.to, visited);
  }
}
const onPath = [];
const path = [];
function traversePath(graph, s, dest) {
  if (!s || s >= graph.size) {
    return;
  }

  // 防止成环
  if (onPath[s]) {
    return;
  }

  if (s === dest) {
    return;
  }

  onPath[s] = true;
  path.push(s);
  for (const e of graph.neighbors(s)) {
    traversePath(graph, e.to, dest);
  }
  path.pop(s);
  onPath[s] = false;
}