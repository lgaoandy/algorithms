class Queue {
	constructor() {
		this.queue = []
	}

	get size() {
		const length = this.queue.length
		console.log("\x1b[35msize\x1b[0m = \x1b[32m%s\x1b[0m", length)
		return length
	}

	enqueue(element) {
		console.log("\x1b[32menqueue\x1b[0m(%s) - \x1b[32m%s\x1b[0m has joined the queue", element, element)
		this.queue.push(element)
	}

	// using O(n)
	dequeue() {
		const removed = this.queue.shift()
		console.log("\x1b[31mdequeue\x1b[0m() - \x1b[32m%s\x1b[0m has been left the queue", removed)
		return removed
	}

	peek() {
		const next = this.queue[0]
		console.log("\x1b[34mpeek\x1b[0m() - \x1b[32m%s\x1b[0m is next in queue", next)
		return next
	}

	isEmpty() {
		const isEmpty = this.queue.length === 0
		console.log("\x1b[33misEmpty\x1b[0m() - %s", isEmpty ? "TRUE" : "FALSE")
		return isEmpty
	}

	print() {
		console.log("\n\x1b[36mprint\x1b[0m()", this.queue, "\n")
		return this.queue
	}
}

const airport = new Queue()
airport.peek()
airport.isEmpty()
airport.enqueue("Edward")
airport.size

airport.isEmpty()
airport.dequeue()
airport.isEmpty()

airport.enqueue("Jessica")
airport.enqueue("Joshua")
airport.enqueue("Yang Yang")
airport.enqueue("Cindy")
airport.enqueue("Rebekka")

airport.peek()
airport.size
airport.print()

airport.dequeue()
airport.peek()
airport.print()

airport.dequeue()
airport.dequeue()
airport.enqueue("Ethan")
airport.dequeue()

airport.size
airport.print()
