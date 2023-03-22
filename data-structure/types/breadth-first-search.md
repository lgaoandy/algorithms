**Breadth First Search**

- explores all nodes one depth at a time, before traversing to deeper nodes

_Approach_

1. create a queue
2. enqueue the root node
3. as long as a node exists in the queue
   a) dequeue the node from the front
   b) read the node's value
   c) enqueue the node's left chlid if exist
   d) enqueue the node's right child if exist
