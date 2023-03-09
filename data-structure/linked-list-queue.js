const LinkedList = require("./linked-list-with-tail")

class LinkedListQueue {
	constructor() {
		this.list = new LinkedList()
	}

	enqueue(value) {
		this.list.prepend(value)
	}

	dequeue() {
		return this.list.removeFromEnd()
	}

	peek() {
		return this.list.tail.value
	}

	isEmpty() {
		return this.list.isEmpty()
	}

	getSize() {
		return this.list.getSize()
	}

	print() {
		this.list.print()
	}
}

const queue = new LinkedListQueue()
console.log("\x1b[35misEmpty\x1b[0m(): %s", queue.isEmpty())
console.log("\x1b[35mgetSize\x1b[0m(): %s", queue.getSize())

console.log("\x1b[32menqueue\x1b[0m(%s):", 10, queue.enqueue(10))
console.log("\x1b[32menqueue\x1b[0m(%s):", 20, queue.enqueue(20))
console.log("\x1b[32menqueue\x1b[0m(%s):", 30, queue.enqueue(30))

console.log("\x1b[35misEmpty\x1b[0m(): %s", queue.isEmpty())
console.log("\x1b[35mgetSize\x1b[0m(): %s", queue.getSize())
queue.print()

console.log("\x1b[31mdequeue\x1b[0m(): %s", queue.dequeue())
console.log("\x1b[35mpeek\x1b[0m(): %s", queue.peek())
queue.print()
