import { Stack } from './stack.mjs'
import { MinMaxStack } from './minMaxStack.mjs'
import { Queue } from './queue.mjs'
import { BinaryTree } from './binaryTree.mjs'
import { BinarySearchTree } from './binarySearchTree.mjs'
import { Graph } from './graph.mjs'
import { GraphAlgorithms } from './graphAlgorithms.mjs'
import { LinkedList } from './linkedList.mjs'
import { LinkedListCycle } from './linkedListCycle.mjs'

// usage of Stack

const stack = new Stack() // []
stack.push(1) // [1]
stack.push(2) // [1,2]
stack.push(3) // [1,2,3]
console.log(stack.pop() /* [1,2] */) // log: 3
console.log(stack.peek()) // log: 2
console.log(stack.size()) // log: 2
stack.clear() // []

// usage of MinMaxStack

const minMaxStack = new MinMaxStack() // []
minMaxStack.push(5) // [5], max: 5, min: 5
minMaxStack.push(10) // [5,10], max: 10, min: 5
minMaxStack.push(3) // [5,10,3], max: 10, min: 3
minMaxStack.push(8) // [5,10,3,8], max: 10, min: 3

console.log(minMaxStack.getMax()) // log: 10
console.log(minMaxStack.getMin()) // log: 3

// usage of Queue

const queue = new Queue() // []
queue.enqueue(1) // [1]
queue.enqueue(2) // [1,2]
queue.enqueue(3) // [1,2,3]
console.log(queue.dequeue() /* [2,3] */) // log: 1
console.log(queue.peek()) // log: 2
console.log(queue.size()) // log: 2
queue.clear() // []

// usage of Binary Tree

const binaryTree = new BinaryTree()

binaryTree.insert(10)
binaryTree.insert(5)
binaryTree.insert(15)
binaryTree.insert(3)
binaryTree.insert(7)

console.log(binaryTree.inOrder()) // log: [3, 5, 7, 10, 15]
console.log(binaryTree.preOrder()) // log: [10, 5, 3, 7, 15]
console.log(binaryTree.postOrder()) // log: [3, 7, 5, 15, 10]

// usage of BinarySearchTree

const binarySearchTree = new BinarySearchTree()

binarySearchTree.insert(10)
binarySearchTree.insert(5)
binarySearchTree.insert(15)
binarySearchTree.insert(3)
binarySearchTree.insert(7)

console.log(binarySearchTree.isBinarySearchTree()) // log: true

// usage of Graph

const graph = new Graph()

graph.addVertex('A') // Map ['A':[]]
graph.addVertex('B') // Map ['A':[], 'B':[]]
graph.addVertex('C') // Map ['A':[], 'B':[], 'C':[]]

graph.addEdge('A', 'B') // Map ['A':[B], 'B':[A], 'C':[]]
graph.addEdge('B', 'C') // Map ['A':[B], 'B':[A,B], 'C':[B]]

console.log(graph.breadthFirstSearch('A')) // log: [ 'A', 'B', 'C' ]

// usage of GraphAlgorithms

const graphAlgorithms = new GraphAlgorithms(graph)

console.log(graphAlgorithms.bfsShortestPath('A', 'C')) // log: ['A', 'B', 'C']
console.log(graphAlgorithms.dijkstra('B', 'C')) // log: ['B', 'C']

// usage of LinkedList

const linkedList = new LinkedList() // null

linkedList.insert(5) // 5 -> null
linkedList.insert(10) // 5 -> 10 -> null
linkedList.insert(3) // 5 -> 10 -> 3 -> null

console.log(linkedList.search(10)) // log: true
console.log(linkedList.remove(10)) // log: true

// usage of linkedListCycle

const linkedListCycle = new LinkedListCycle()

linkedListCycle.insert(1)
const node2 = linkedListCycle.insert(2)
linkedListCycle.insert(3)
const node4 = linkedListCycle.insert(4)

node4.next = node2 // make cycle

console.log(linkedListCycle.hasCycle())
