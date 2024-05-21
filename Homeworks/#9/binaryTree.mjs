class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    // store privately root of binary tree
    #root = null

    // insert node into binary tree
    insert(value) {
        const newNode = new TreeNode(value)

        if (this.#root === null) {
            this.#root = newNode
            return
        }

        let current = this.#root
        let parent

        while (true) {
            parent = current
            if (value < current.value) {
                current = current.left
                if (current === null) {
                    parent.left = newNode
                    break
                }
            } else {
                current = current.right
                if (current === null) {
                    parent.right = newNode
                    break
                }
            }
        }
    }

    // search for node with given value
    search(value) {
        let current = this.#root

        while (current !== null) {
            if (value === current.value) {
                return true
            } else if (value < current.value) {
                current = current.left
            } else {
                current = current.right
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
