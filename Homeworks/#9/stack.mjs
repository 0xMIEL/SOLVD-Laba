export class Stack {
    #items = []

    push(value) {
        this.#items.push(value)
    }

    pop() {
        if (this.isEmpty()) {
            return null
        }

        return this.#items.pop()
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }

        return this.#items[this.#items.length - 1]
    }

    isEmpty() {
        return this.#items.length === 0
    }

    size() {
        return this.#items.length
    }

    clear() {
        this.#items = []
    }

    display() {
        console.log(this.#items.join(' -> '))
    }
}