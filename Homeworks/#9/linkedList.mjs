/*
    class Node is used for crating node object that is curical to implement linked list structure
*/

class Node {
    constructor(value) {
        this.value = value // store value of node
        this.next = null // store next node
    }
}

/*
    class LinkedList is used for storing current arrangement of linked list and managing operations on it

    pattern:
    [value, pointer] -> [value, pinter] -> ...
*/

class LinkedList {
    #head = null // store head of array
    #length = 0 // store length of array

    get length() { // getter for length propert
        return this.#length
    }

    set length(newValue) { // setter that blocks altering length property
        throw Error('You cannot change length property!')
    }


    // insert method is used for inserting new value to the list, if you don't specify index argument then method append value to the end of list
    insert(value, index = this.#length) {
        if (index < 0 || index > this.#length) {
            throw new RangeError('Index is out of range!')
        }

        const newNode = new Node(value)

        if (index === 0) {
            newNode.next = this.#head
            this.#head = newNode
        } else {
            let currentNode = this.#head
            for (let i = 1; i < index; i++) {
                currentNode = currentNode.next
            }
            newNode.next = currentNode.next
            currentNode.next = newNode
        }

        this.#length++
    }

    // remove method is used for remove value at specific index if you don't specify index argument this method remve the last value from list
    remove(index = this.#length - 1) {
        if (index < 0 || index >= this.#length) {
            throw new RangeError('Index is out of range or you are trying to delete element from empty list!')
        }

        if (index === 0) {
            this.#head = this.#head.next
        } else {
            let currentNode = this.#head
            for (let i = 1; i < index; i++) {
                currentNode = currentNode.next
            }
            currentNode.next = currentNode.next.next
        }

        this.#length--
    }

    // displat method is used to display elements from that structure
    display() {
        let currentNode = this.#head
        while (currentNode !== null) {
            process.stdout.write(`${currentNode.value} -> `)
            currentNode = currentNode.next
        }
        process.stdout.write('null\n')
    }
}
