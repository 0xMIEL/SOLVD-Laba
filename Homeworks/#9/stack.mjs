export class Stack {
    // store privately items of stack
    #items = []

    // add element to stack
    push(element) {
        this.#items.push(element)
    }

    // remove and return top element of stack
    pop() {
        if (this.isEmpty()) {
            return null
        }
        return this.#items.pop()
    }

    // return top element of stack without removing it
    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.#items[this.#items.length - 1]
    }

    // check if stack is empty
    isEmpty() {
        return this.#items.length === 0
    }

    // return size of stack
    size() {
        return this.#items.length
    }

    // clear stack
    clear() {
        this.#items = []
    }
}
