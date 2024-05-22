import { Stack } from './stack.mjs'

export class MinMaxStack extends Stack {
    // store privately minStack and maxStack property
    #minStack = []
    #maxStack = []

    get minStack() {
        return this.#minStack
    }

    get maxStack() {
        return this.#maxStack
    }

    set minStack(_) {
        throw new Error('You cannot set minStack manually!')
    }

    set maxStack(_) {
        throw new Error('You cannot set maxStack manually!')
    }

    // override push to handle min and max stack
    push(element) {
        super.push(element)

        if (this.#minStack.length === 0 || element <= this.getMin()) {
            this.#minStack.push(element)
        } else {
            this.#minStack.push(this.getMin())
        }

        if (this.#maxStack.length === 0 || element >= this.getMax()) {
            this.#maxStack.push(element)
        } else {
            this.#maxStack.push(this.getMax())
        }
    }

    // override pop to handle min and max stack
    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty!')
        }
        this.#minStack.pop()
        this.#maxStack.pop()
        return super.pop()
    }

    // get top element of minStack
    getMin() {
        if (this.isEmpty()) {
            throw new Error('MinStack is empty!')
        }
        return this.#minStack[this.#minStack.length - 1]
    }

    // get top element of maxStack
    getMax() {
        if (this.isEmpty()) {
            throw new Error('MaxStack is empty!')
        }
        return this.#maxStack[this.#maxStack.length - 1]
    }
}


