const LinkedList = require("./linked-list-with-tail")

class LinkedListStack {
    constructor() {
        this.list = new LinkedList()
    }

    push(value) {
        this.list.prepend(value)
    }

    pop() {
        return this.list.removeFromFront(0)
    }

    peek() {
        return this.list.head.value
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        return this.list.getSize()
    }

    print() {
        return this.list.print()
    }
}

const stack = new LinkedListStack()
console.log("\x1b[35misEmpty\x1b[0m(): %s", stack.isEmpty())
console.log("\x1b[35mgetSize\x1b[0m(): %s", stack.getSize())

console.log("\x1b[32mpush\x1b[0m(%s):", 30, stack.push(30))
console.log("\x1b[32mpush\x1b[0m(%s):", 20, stack.push(20))
console.log("\x1b[32mpush\x1b[0m(%s):", 10, stack.push(10))

console.log("\x1b[35misEmpty\x1b[0m(): %s", stack.isEmpty())
console.log("\x1b[35mgetSize\x1b[0m(): %s", stack.getSize())
stack.print()

console.log("\x1b[31mpop\x1b[0m(): %s", stack.pop())
console.log("\x1b[35mpeek\x1b[0m(): %s", stack.peek())
stack.print()
