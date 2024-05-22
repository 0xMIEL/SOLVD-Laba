class TreeNode {
    #value
    #left
    #right

    constructor(value) {
        this.#value = value
        this.#left = null
        this.#right = null
    }

    get value() {
        return this.#value
    }

    get left() {
        return this.#left
    }

    get right() {
        return this.#right
    }

    set value(newValue) {
        this.#value = newValue
    }

    set left(newValue) {
        this.#left = newValue
    }

    set right(newValue) {
        this.#right = newValue
    }
}

export class BinaryTree {
    // store privately root property
    #root = null

    get root() {
        return this.#root
    }

    set root(newValue) {
        throw new Error('You cannot set root of tree manually!')
    }

    // insert node into binary tree
    insert(value) {
        const newNode = new TreeNode(value)

        if (this.#root === null) {
            this.#root = newNode
            return
        }

        let currentNode = this.#root
        let parentNode

        while (true) {
            parentNode = currentNode
            if (value < currentNode.value) {
                currentNode = currentNode.left
                if (currentNode === null) {
                    parentNode.left = newNode
                    break
                }
            } else {
                currentNode = currentNode.right
                if (currentNode === null) {
                    parentNode.right = newNode
                    break
                }
            }
        }
    }

    // search for node with given value
    search(value) {
        let currentNode = this.#root

        while (currentNode !== null) {
            if (value === currentNode.value) {
                return true
            } else if (value < currentNode.value) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }

        return false
    }

    // in-order traversal of binary tree
    inOrder(node = this.#root, result = []) {
        if (node !== null) {
            this.inOrder(node.left, result)
            result.push(node.value)
            this.inOrder(node.right, result)
        }

        return result
    }

    // pre-order traversal of binary tree
    preOrder(node = this.#root, result = []) {
        if (node !== null) {
            result.push(node.value)
            this.preOrder(node.left, result)
            this.preOrder(node.right, result)
        }

        return result
    }

    // post-order traversal of binary tree
    postOrder(node = this.#root, result = []) {
        if (node !== null) {
            this.postOrder(node.left, result)
            this.postOrder(node.right, result)
            result.push(node.value)
        }

        return result
    }
}
