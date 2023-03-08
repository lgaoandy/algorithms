class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class LinkedListWithTail {
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	isEmpty() {
		return this.size === 0
	}

	getSize() {
		return this.size
	}

	print() {
		let current = this.head
		let listValues = ""
		while (current) {
			listValues += `-> \x1b[33m${current.value}\x1b[0m `
			current = current.next
		}
		console.log("\x1b[36mprint\x1b[0m():", listValues, "\n")
	}

	// O(1)
	prepend(value) {
		const node = new Node(value)
		if (this.isEmpty()) {
			this.head = node
			this.tail = node
		} else {
			node.next = this.head
			this.head = node
		}
		this.size++
	}

	// O(1)
	append(value) {
		const node = new Node(value)
		if (this.isEmpty()) {
			this.head = node
			this.tail = node
		} else {
			this.tail.next = node
			this.tail = node
		}
		this.size++
	}

	// O(1)
	removeFromFront() {
		if (this.isEmpty()) {
			return null
		}

		let removedNode = this.head
		this.head = this.head.next
		this.size--
		return removedNode.value
	}

	// O(n)
	removeFromEnd() {
		if (this.isEmpty()) {
			return null
		}

		if (this.size === 1) {
			let removedNode = this.head
			this.tail = null
			this.head = null
			this.size--
			return removedNode.value
		} else {
			let current = this.head
			for (let i = 0; i < this.size - 2; i++) {
				current = current.next
			}
			let removedNode = current.next
			current.next = null
			this.tail = current
			this.size--
			return removedNode.value
		}
	}
}

module.exports = LinkedListWithTail

// const list = new LinkedListWithTail()
// console.log("\x1b[35misEmpty\x1b[0m(): %s", list.isEmpty())
// console.log("\x1b[35mgetSize\x1b[0m(): %s", list.getSize())
// console.log("\x1b[34mhead\x1b[0m:", list.head?.value)
// console.log("\x1b[34mtail\x1b[0m:", list.tail?.value)
// list.print()

// console.log("\x1b[32mprepend\x1b[0m(%s):", 30, list.prepend(30))
// console.log("\x1b[32mprepend\x1b[0m(%s):", 20, list.prepend(20))
// console.log("\x1b[32mprepend\x1b[0m(%s):", 10, list.prepend(10))
// console.log("\x1b[34mhead\x1b[0m:", list.head?.value)
// console.log("\x1b[34mtail\x1b[0m:", list.tail?.value)
// list.print()

// console.log("\x1b[32mappend\x1b[0m(%s):", 40, list.append(40))
// console.log("\x1b[32mappend\x1b[0m(%s):", 70, list.append(70))
// console.log("\x1b[32mappend\x1b[0m(%s):", 90, list.append(90))
// console.log("\x1b[34mhead\x1b[0m:", list.head?.value)
// console.log("\x1b[34mtail\x1b[0m:", list.tail?.value)
// list.print()

// console.log("\x1b[31mremoveFromFront\x1b[0m():", list.removeFromFront())
// list.print()

// console.log("\x1b[31mremoveFromEnd\x1b[0m():", list.removeFromEnd())
// list.print()
