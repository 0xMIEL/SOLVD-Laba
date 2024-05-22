import { Queue } from './queue.mjs'

export class GraphAlgorithms {
    constructor(graph) {
        this.graph = graph
    }

    // dijkstra's algorithm
    dijkstra(startVertex, endVertex) {
        const distances = {}
        const visited = new Set()
        const previous = {}

        for (const vertex of this.graph.getVertices()) {
            distances[vertex] = vertex === startVertex ? 0 : Infinity
        }

        while (true) {
            let currentVertex = null
            let shortestDistance = Infinity

            for (const vertex of this.graph.getVertices()) {
                if (
                    !visited.has(vertex) &&
                    distances[vertex] < shortestDistance
                ) {
                    currentVertex = vertex
                    shortestDistance = distances[vertex]
                }
            }

            if (!currentVertex || currentVertex === endVertex) {
                break
            }

            visited.add(currentVertex)

            const neighbors = this.graph.getNeighbors(currentVertex)
            for (const neighbor of neighbors) {
                const distanceToNeighbor = distances[currentVertex] + 1

                if (distanceToNeighbor < distances[neighbor]) {
                    distances[neighbor] = distanceToNeighbor
                    previous[neighbor] = currentVertex
                }
            }
        }

        const shortestPath = []
        let vertex = endVertex
        while (vertex) {
            shortestPath.unshift(vertex)
            vertex = previous[vertex]
        }

        return shortestPath
    }

    // breadth-first search shortest path
    bfsShortestPath(startVertex, endVertex) {
        const queue = new Queue()
        const visited = new Set()
        const previous = {}

        queue.enqueue(startVertex)
        visited.add(startVertex)

        while (!queue.isEmpty()) {
            const currentVertex = queue.dequeue()

            if (currentVertex === endVertex) break

            const neighbors = this.graph.getNeighbors(currentVertex)

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor)
                    previous[neighbor] = currentVertex
                    queue.enqueue(neighbor)
                }
            }
        }

        const shortestPath = []
        let vertex = endVertex
        while (vertex) {
            shortestPath.unshift(vertex)
            vertex = previous[vertex]
        }

        return shortestPath
    }
}