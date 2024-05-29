import { customHashFunction } from './customHashFunction.mjs'
import { LinkedList } from './keyValueLinkedList.mjs'

export class HashTable {
    #bucket
    #size
    
    constructor(size = 50) {
        this.#bucket = new Array(size)
        this.#size = size
    }

    // calculate index in bucket for given key
    #hash(key) {
        return customHashFunction(key) % this.#size
    }

    // insert key-value pair into hash #bucket
    insert(key, value) {
        const index = this.#hash(key)
        if (!this.#bucket[index]) {
            this.#bucket[index] = new LinkedList()
        }
        this.#bucket[index].insert(key, value)
    }

    // get value associated with given key from hash bucket
    get(key) {
        const index = this.#hash(key)
        if (this.#bucket[index]) {
            return this.#bucket[index].search(key)
        }
        return null
    }

    // delete key-value pair with given key from hash bucket
    delete(key) {
        const index = this.#hash(key)
        if (this.#bucket[index]) {
            return this.#bucket[index].remove(key)
        }
        return false
    }
}
