## BinarySearchTree:  
    derived from: BinaryTree  

    A Binary Search Tree (BST) is a hierarchical data structure that organizes nodes in a sorted manner. Each node in the tree has at most two child nodes: a left child and a right child. The BST property ensures that for any given node, all nodes in its left subtree have values less than or equal to its value, and all nodes in its right subtree have values greater than or equal to its value.

**methods**:

-   `isBinarySearchTree([node, min, max])`: This method checks if the binary tree is a binary search tree within the specified range. It takes three optional parameters: node (starting node for validation), min (minimum value allowed in the subtree), and max (maximum value allowed in the subtree).

## BinaryTree:  

    A Binary Tree is a hierarchical data structure in which each node has at most two children: a left child and a right child.

**methods**:

-   `insert(value)`: Inserts a node with the given value into the binary tree.
-   `search(value)`: Searches for a node with the given value in the binary tree.
-   `inOrder([node, result])`: Performs an in-order traversal of the binary tree, optionally starting from a specific node, and returns the result.
-   `preOrder([node, result])`: Performs a pre-order traversal of the binary tree, optionally starting from a specific node, and returns the result.
-   `postOrder([node, result])`: Performs a post-order traversal of the binary tree, optionally starting from a specific node, and returns the result.

## Graph:  

    A Graph is a non-linear data structure consisting of vertices (or nodes) and edges that connect pairs of vertices.

**methods**:

-   `addVertex(vertex)`: Adds a vertex to the graph.
-   `addEdge(vertex1, vertex2)`: Adds an edge between two vertices in the graph.
-   `getNeighbors(vertex)`: Returns the neighbors of a given vertex in the graph.
-   `depthFirstSearch(vertex)`: Performs a depth-first search traversal of the graph starting from the specified vertex.
-   `breadthFirstSearch(vertex)`: Performs a breadth-first search traversal of the graph starting from the specified vertex.
-   `getVertices()`: Returns all vertices in the graph.

## GraphAlgorithms:  

    Graph algorithms are algorithms used to solve problems on graphs, such as finding the shortest path between two vertices or determining if a graph contains a cycle.

**methods**:

-   `constructor(graph)`: Initializes GraphAlgorithms with a graph.
-   `dijkstra(startVertex, endVertex)`: Finds the shortest path using Dijkstra's algorithm between two vertices in the graph.
-   `bfsShortestPath(startVertex, endVertex)`: Finds the shortest path using breadth-first search between two vertices in the graph.

## LinkedList:  

    A linked list is a linear data structure consisting of a sequence of elements, where each element points to the next one in the sequence.

**methods**:

-   `insert(value)`: Inserts a node with the given value into the linked list.
-   `remove(value)`: Removes the node with the given value from the linked list.
-   `search(value)`: Searches for a node with the given value in the linked list.
-   `size()`: Returns the number of nodes in the linked list.

## LinkedListCycle:  

    A linked list cycle is an extension of a linked list that checks whether the list contains a cycle, i.e., if there is any node that points back to a previous node in the list, creating a loop.

**methods**:

-   `hasCycle()`: Determines whether the linked list contains a cycle.

## MinMaxStack:  

    A min-max stack is a stack data structure that supports operations such as push, pop, getMin, and getMax, while maintaining constant time complexity for each operation.

**methods**:

-   `push(element)`: Pushes an element onto the stack.
-   `pop()`: Pops the top element from the stack.
-   `getMin()`: Returns the minimum element in the stack.
-   `getMax()`: Returns the maximum element in the stack.

## Queue:  

    A queue is a linear data structure that follows the First In, First Out (FIFO) principle, where elements are added to the end (rear) and removed from the front (front).

**methods**:

-   `enqueue(element)`: Adds an element to the queue.
-   `dequeue()`: Removes and returns the front element from the queue.
-   `peek()`: Returns the front element of the queue without removing it.
-   `isEmpty()`: Checks if the queue is empty.
-   `size()`: Returns the size of the queue.
-   `clear()`: Removes all elements from the queue.

## Stack:  

    A stack is a linear data structure that follows the Last In, First Out (LIFO) principle, where elements are added and removed from the same end.

**methods**:

-   `push(element)`: Pushes an element onto the stack.
-   `pop()`: Pops the top element from the stack.
-   `peek()`: Returns the top element of the stack without removing it.
-   `isEmpty()`: Checks if the stack is empty.
-   `size()`: Returns the size of the stack.
-   `clear()`: Removes all elements from the stack.
