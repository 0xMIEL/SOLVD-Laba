import { Stack } from './stack.mjs'
import { Queue } from './queue.mjs'

class Graph {
    // store privately adjacency list of vertices
    #adjacencyList = new Map()

    // add vertex to graph
    addVertex(vertex) {
        if (!this.#adjacencyList.has(vertex)) {
            this.#adjacencyList.set(vertex, [])
        }
    }

    // add edge between vertices
    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        this.#adjacencyList.get(vertex1).push(vertex2)
        this.#adjacencyList.get(vertex2).push(vertex1)
    }

    // get neighbour of given vertex
    getNeighbors(vertex) {
        return this.#adjacencyList.get(vertex) || []
    }

    // search graph from given vertex deeply
    depthFirstSearch(vertex) {
        const stack = new Stack()
        const result = []
        const visited = new Set()
        stack.push(vertex)
        visited.add(vertex)

        while (stack.size() > 0) {
            const currentVertex = stack.pop()
            result.push(currentVertex)

            this.getNeighbors(currentVertex).forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor)
                    stack.push(neighbor)
                }
            })
        }

        return result
    }

    // search graph from given vertex widely
    breadthFirstSearch(vertex) {
        const queue = new Queue()
        const result = []
        const visited = new Set()
        queue.enqueue(vertex)
        visited.add(vertex)

        while (queue.size() > 0) {
            const currentVertex = queue.dequeue()
            result.push(currentVertex)

            this.getNeighbors(currentVertex).forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor)
                    queue.enqueue(neighbor)
                }
            })
        }

        return result
    }
}
