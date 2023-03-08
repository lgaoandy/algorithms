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

	// O(n)
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

	// remove node by index - O(n)
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

	// remove the first matching node by value - O(n)
	removeValue(value) {
		if (this.isEmpty()) {
			return null
		}

		if (this.head.value === value) {
			this.head = this.head.next
			this.size--
			return value
		} else {
			let prev = this.head
			for (let i = 0; i < this.size - 1; i++) {
				if (prev.next.value === value) {
					prev.next = prev.next.next
					this.size--
					return value
				}
				prev = prev.next
			}
			return null
		}
	}

	// returns the first index of node with matching the value - O(n)
	search(value) {
		if (this.isEmpty()) {
			return -1
		} else {
			let current = this.head
			for (let i = 0; i < this.size; i++) {
				if (current.value === value) {
					return i
				} else {
					current = current.next
				}
			}
			return -1
		}
	}

	// reverses the order of the nodes - O(n)
	reverse() {
		let prev = null
		let current = this.head
		while (current) {
			let next = current.next
			current.next = prev
			prev = current
			current = next
		}
		this.head = prev
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
}

const list = new LinkedList()
console.log("\x1b[35misEmpty\x1b[0m(): %s", list.isEmpty())
console.log("\x1b[35mgetSize\x1b[0m(): %s", list.getSize())
console.log("\x1b[32mprepend\x1b[0m(%s):", 30, list.prepend(30))
list.print()

console.log("\x1b[32mprepend\x1b[0m(%s):", 20, list.prepend(20))
console.log("\x1b[32mprepend\x1b[0m(%s):", 10, list.prepend(10))
list.print()

console.log("\x1b[32mappend\x1b[0m(%s):", 40, list.append(40))
list.print()

console.log("\x1b[32minsert\x1b[0m(%s, %s):", 25, 2, list.insert(25, 2))
list.print()

console.log("\x1b[31mremoveFrom\x1b[0m(%s): %s", 10, list.removeFrom(10))
console.log("\x1b[31mremoveFrom\x1b[0m(%s): %s", 2, list.removeFrom(2))
list.print()

console.log("\x1b[31mremoveValue\x1b[0m(%s): %s", 30, list.removeValue(30))
list.print()

console.log("\x1b[32mappend\x1b[0m(%s):", 52, list.append(52))
console.log("\x1b[32mprepend\x1b[0m(%s):", 78, list.prepend(78))
console.log("\x1b[32mprepend\x1b[0m(%s):", 66, list.prepend(66))
console.log("\x1b[35msearch\x1b[0m(%s): %s", 66, list.search(66))
console.log("\x1b[35msearch\x1b[0m(%s): %s", 20, list.search(20))
console.log("\x1b[35msearch\x1b[0m(%s): %s", 52, list.search(52))
console.log("\x1b[35msearch\x1b[0m(%s): %s", 166, list.search(166))
list.print()

console.log("\x1b[35mreverse\x1b[0m():", list.reverse())
list.print()
