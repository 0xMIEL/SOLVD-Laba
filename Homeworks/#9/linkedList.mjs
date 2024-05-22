class Node {
    #value
    #next

    constructor(value) {
        this.#value = value
        this.#next = null
    }

    get value() {
        return this.#value
    }

    get next() {
        return this.#next
    }

    set value(newValue) {
        this.#value = newValue
    }

    set next(newValue) {
        this.#next = newValue
    }
}

export class LinkedList {
    // store privately head and length of list
    #head = null
    #length = 0

    get head() {
        return this.#head
    }

    get length() {
        return this.#length
    }

    set head(_) {
        throw new Error('You cannot set head of linked list manually!')
    }

    set length(_) {
        throw new Error('You cannot set length of linked list manually!')
    }

    // insert node into linked list
    insert(value) {
        const newNode = new Node(value)
        this.#length++

        if (this.#head === null) {
            this.#head = newNode
            return newNode
        }

        let currentNode = this.#head

        while (currentNode.next !== null) currentNode = currentNode.next

        currentNode.next = newNode

        return newNode
    }

    // remove node from list
    remove(value) {
        if (this.#head === null) throw new Error('Linked list is empty!')

        if (this.#head.value === value) {
            this.#head = this.#head.next
            this.#length--
            return true
        }

        let currentNode = this.#head
        let previousNode = null

        while (currentNode !== null && currentNode.value !== value) {
            previousNode = currentNode
            currentNode = currentNode.next
        }

        if (currentNode !== null) {
            previousNode.next = currentNode.next
            this.#length--
            return true
        }

        return false
    }

    // search for node with given node
    search(value) {
        let currentNode = this.#head

        while (currentNode !== null) {
            if (currentNode.value === value) return true
            currentNode = currentNode.next
        }

        return false
    }

    // get size of list
    size() {
        return this.#length
    }
}
