class Queue {
    #items = []

    enqueue(value) {
        this.#items.push(value)
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }

        return this.#items.shift()
    }

    peak() {
        if (this.isEmpty()) {
            return null
        }

        return this.#items[0]
    }

    isEmpty() {
        return this.#items.length === 0
    }

    clear() {
        this.#items = []
    }

    display() {
        console.log(this.#items.join(' <- '))
    }
}