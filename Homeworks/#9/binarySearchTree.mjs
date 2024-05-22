import { BinaryTree } from './binaryTree.mjs'

export class BinarySearchTree extends BinaryTree {
    isBinarySearchTree(node = this.root, min = -Infinity, max = Infinity) {
        if (node === null) {
            return true
        }

        if (node.value <= min || node.value >= max) {
            return false
        }

        return (
            this.isBinarySearchTree(node.left, min, node.value) &&
            this.isBinarySearchTree(node.right, node.value, max)
        )
    }
}
