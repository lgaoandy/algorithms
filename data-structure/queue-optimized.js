// Time complexity of dequeuing is O(n), this can be reduced if we avoid shifting the elements entirely
class QueueObject {
	constructor() {
		this.items = {}
		this.rear = 0
		this.front = 0
	}

	enqueue(element) {
		this.items[this.rear] = element
		this.rear++
	}

	dequeue() {
		const item = this.items[this.front]
		if (!item) return
		delete this.items[this.front]
		this.front++
		return item
	}

	isEmpty() {
		return this.rear - this.front === 0
	}

	peek() {
		return this.items[this.front]
	}

	size() {
		return this.rear - this.front
	}

	print() {
		console.log(this.items)
	}
}

const queue = new QueueObject()
queue.dequeue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size())
queue.print()

console.log(queue.dequeue())
console.log(queue.peek())
