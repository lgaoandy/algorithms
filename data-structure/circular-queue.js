class CircularQueue {
	constructor(maxSize) {
		this.items = {}
		this.maxSize = maxSize
		this.front = 0
		this.rear = 0
	}

	enqueue(element) {
		if (Object.entries(this.items).length < this.maxSize) {
			this.items[this.rear] = element
			this.rear++
		}
	}

	dequeue() {
		const item = this.items[this.front]

		// return if item does not exist
		if (!item) return

		delete this.items[this.front]
		this.front++
		return item
	}

	get size() {
		return this.rear - this.front
	}

	isFull() {
		return this.size === this.maxSize
	}

	isEmpty() {
		return this.size === 0
	}

	peek() {
		return this.items[this.front]
	}

	print() {
		if (this.isEmpty()) {
			console.log("Queue is Empty")
		} else {
			let queue = ""
			for (let i = this.front; i < this.rear; i++) {
				queue += this.items[i] + " "
			}
			console.log(queue)
		}
	}
}

const doctorWalkIn = new CircularQueue(3)
console.log(doctorWalkIn.isEmpty())
doctorWalkIn.enqueue("Patient 1")
console.log(doctorWalkIn.isEmpty())
console.log(doctorWalkIn.isFull())
doctorWalkIn.enqueue("Patient 2")
doctorWalkIn.enqueue("Patient 3")
console.log(doctorWalkIn.isFull())
doctorWalkIn.enqueue("Patient 4")
doctorWalkIn.print()
doctorWalkIn.dequeue()
doctorWalkIn.print()
