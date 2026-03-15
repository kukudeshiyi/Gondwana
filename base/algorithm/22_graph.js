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

class WeightedDigraphMatrix {
  constructor(n) {
    this.graph = Array.from({ length: n }, () => Array(n).fill(0));
  }

  addEdge(from, to, weight = 1) {
    this.graph[from][to] = weight;
  }

  removeEdge(from, to) {
    this.graph[from][to] = 0;
  }

  hasEdge(from, to) {
    return this.graph[from][to] !== 0;
  }

  weight(from, to) {
    return this.graph[from][to]
  }

  neighbors(v) {
    const res = [];
    for (let i = 0; i < this.graph[v].length; i++) {
      if (this.graph[v][i] > 0) {
        res.push({ to: i, weight: this.graph[v][i] });
      }
    }
    return res;
  }
}

class WeightedUnDigraph {
  constructor(n) {
    this.graph = new WeightedDigraph(n);
  }

  addEdge(from, to, weight = 1) {
    this.graph.addEdge(from, to, weight);
    this.graph.addEdge(to, from, weight);
  }

  removeEdge(from, to) {
    this.graph.removeEdge(from, to);
    this.graph.removeEdge(to, from);
  }

  hasEdge(from, to) {
    return this.graph.hasEdge(from, to);
  }

  weight(from, to) {
    return this.graph.weight(from, to);
  }

  neighbors(v) {
    return this.graph.neighbors(v);
  }
}