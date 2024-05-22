export class Queue {
    // store privately items of queue
    #items = []

    get items() {
        return this.#items
    }

    set items(_) {
        throw new Error('You cannot set items of queque manually!')
    }

    // add element to queue
    enqueue(element) {
        this.#items.push(element)
    }

    // remove and return front element of queue
    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty!')
        }
        return this.#items.shift()
    }

    // return front element of queue without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty!')
        }
        return this.#items[0]
    }

    // check if queue is empty
    isEmpty() {
        return this.#items.length === 0
    }

    // return size of queue
    size() {
        return this.#items.length
    }

    // clear queue
    clear() {
        this.#items = []
    }
}
