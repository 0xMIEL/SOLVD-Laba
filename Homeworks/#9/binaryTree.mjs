class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
        this.count = 1
    }
}

class BinaryTree {
    #root = null
    #type

    constructor(type = 'number') {
        this.#type = type
    }

    #checkValueType(value) {
        if (typeof value !== this.#type) {
            throw TypeError(`This binary tree store only ${this.#type}s`)
        }
    }

    insert(value) {
        this.#checkValueType(value)

        const newNode = new TreeNode(value)

        if (this.#root === null) {
            this.#root = newNode
            return
        }

        let currentNode = this.#root

        while (currentNode) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode
                    break
                }

                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                if (currentNode.right === null) {
                    currentNode.right = newNode
                    break
                }

                currentNode = currentNode.right
            } else {
                currentNode.count++
                break
            }
        }
    }

    remove(value) {
        if (this.#root === null) {
            throw new Error('There is no any nodes in tree!')
        }

        let currentNode = this.#root

        while (currentNode !== null) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else {
                break
            }
        }

        if (currentNode === null) return null
        return currentNode
    }

    #findMaxNode(node) {
        let currentNode = node
        while (node.right) {
            currentNode = node.right
        }

        return currentNode
    }

    display() {
        console.log(this.#root)
    }
}

const binaryTree = new BinaryTree()

const randoms = []

for (let i = 0; i < 20; i++) {
    const random = Math.floor(Math.random() * 100)
    randoms.push(random)
    binaryTree.insert(random)
}
let random2 = Math.floor(Math.random() * randoms.length)

let removals = binaryTree.remove(randoms[random2])

console.log(random2, removals)
