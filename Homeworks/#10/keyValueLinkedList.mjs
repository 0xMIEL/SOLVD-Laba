class Node {
    #key
    #value
    #next

    constructor(key, value) {
        this.#key = key
        this.#value = value
        this.#next = null
    }

    get key() {
        return this.#key
    }

    get value() {
        return this.#value
    }

    get next() {
        return this.#next
    }

    set key(_) {
        throw Error('You cannot set it manually!')
    }

    set value(_) {
        throw Error('You cannot set it manually!')
    }

    set next(_) {
        throw Error('You cannot set it manually!')
    }
}

export class LinkedList {
    #head
    #length

    constructor() {
        this.#head = null
        this.#length = 0
    }

    // insert new node with given key and value to linked list
    insert(key, value) {
        const newNode = new Node(key, value)
        if (this.#head === null) {
            this.#head = newNode
        } else {
            let currentNode = this.#head
            while (currentNode.next !== null) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
        this.#length++
    }

    // remove node with given key from linked list
    remove(key) {
        if (this.#head === null) return false

        if (this.#head.key === key) {
            this.#head = this.#head.next
            this.#length--
            return true
        }

        let currentNode = this.#head
        let previousNode = null

        while (currentNode !== null && currentNode.key !== key) {
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

    // search for node with given key and return its value
    search(key) {
        let currentNode = this.#head
        while (currentNode !== null) {
            if (currentNode.key === key) return currentNode.value
            currentNode = currentNode.next
        }
        return null
    }

    // return number of nodes in linked list
    size() {
        return this.#length
    }
}
