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

	// add a node at the start
	prepend(value) {
		const node = new Node(value)
		if (!this.isEmpty()) {
			node.next = this.head
		}
		this.head = node
		this.size++
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

	// add a node at the end
	append(value) {
		const node = new Node(value)
	}
}

const list = new LinkedList()
console.log("List is empty? ", list.isEmpty())
console.log("List size: ", list.getSize())
list.prepend(10)
list.print()

list.prepend(20)
list.prepend(30)
list.print()
