**Graph**

_Characteristics_

- non-linear data structure that consists of a finite number of vertices (also called nodes) connected by edges
- Trees are specific type of graph

_Types of Graphs_

1. Directed - edges presents arrows pointing in a direction that could be traversed
2. Non-directed - bidirectional

_Variations_

1. Can have no edges
2. Can contain self-loops on a node
3. Can have disconnected nodes
4. Can have numbers or values attached to edges representing additional info

_Usage_

1. Google Maps
2. Social media sites
3. Airlines

_Graph Representations_

1. Adjacency Matrix

      - 2D array of size V, where V = number of verticles in the graph
      - Each row and column represent a vertex
      - Example: matrix[i][j] represents the edge connecting vertex i and vertex j

      const adjacencyMatrix = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
      ]

2. Adjacency List

      - Vertices are stored in a map like data structure
      - Every vertices stores a list of its adjacent vertices

      const adjacencyList = {
      'A': ['B'],
      'B': ['A', 'C'],
      'C': ['B']
      }

_Adjacency Matrix vs. Adjacency List_

1. Adjacency List is more storage efficient
2. Inserting/searching operations

      - Adjacency Matrix: O(n)
      - Adjacency List: O(1)

3. Adjacency List makes storing additional values with edges easier
