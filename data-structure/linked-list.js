class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    // add a node at the start - O(1)
    prepend(value) {
        const node = new Node(value)
        if (!this.isEmpty()) {
            node.next = this.head
        }
        this.head = node
        this.size++
    }

    // add a node at the end - O(n)
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(index)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }

        let removedNode = this.head
        if (index === 0) {
            this.head = removedNode.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--
        return removedNode.value
    }

    print() {
        let current = this.head
        let listValues = ""
        console.log("\x1b[36m%s\x1b[0m():", "print")
        while (current) {
            listValues += `-> \x1b[33m${current.value}\x1b[0m `
            current = current.next
        }
        console.log(listValues)
    }
}

const list = new LinkedList()
console.log("List is empty? ", list.isEmpty())
console.log("List size: ", list.getSize())
list.prepend(30)
list.print()

list.prepend(20)
list.prepend(10)
list.append(40)
list.insert(25, 2)
list.print()
console.log("\x1b[31mremoveFrom\x1b[0m(%s): %s", 10, list.removeFrom(10))
console.log("\x1b[31mremoveFrom\x1b[0m(%s): %s", 10, list.removeFrom(2))
list.print()
