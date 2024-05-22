import { LinkedList } from './linkedList.mjs'

export class LinkedListCycle extends LinkedList {
    // check if there is cycle in linked list
    hasCycle() {
        if (!this.head || !this.head.next) {
            return false
        }

        let tortoise = this.head
        let hare = this.head

        while (hare && hare.next) {
            tortoise = tortoise.next
            hare = hare.next.next

            if (tortoise === hare) {
                return true
            }
        }

        return false
    }
}
