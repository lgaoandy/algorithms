class Stack {
	constructor(items = []) {
		console.log("\x1b[31mnew Stack\x1b[0m() has been defined\n")
		this.items = items
	}

	get size() {
		const length = this.items.length
		console.log("\x1b[33msize\x1b[0m = \x1b[32m%s\x1b[0m", length)
		return length
	}

	push(element) {
		console.log("\x1b[33mpush\x1b[0m(%s) - \x1b[32m%s\x1b[0m has been added", element, element)
		this.items.push(element)
	}

	pop() {
		const item = this.items.pop()
		console.log("\x1b[33mpop\x1b[0m() - \x1b[32m%s\x1b[0m has been removed", item)
		return item
	}

	peek() {
		const nextItem = this.items[this.size - 1]
		console.log("\x1b[33mpeek\x1b[0m() - \x1b[32m%s\x1b[0m is the next item", nextItem)
		return nextItem
	}

	isEmpty() {
		const isEmpty = this.items.length === 0
		console.log("\x1b[33misEmpty\x1b[0m() - \x1b[32m%s\x1b[0m", isEmpty ? "the stack is empty" : "the stack has at least one item")
		return isEmpty
	}

	print() {
		console.log("\n\x1b[36mprint\x1b[0m()", this.items, "\n")
	}
}

const stack1 = new Stack()
stack1.push("i")
stack1.push("wish")
stack1.push("for")
stack1.push("a")
stack1.push("miracle")

stack1.print()
stack1.pop()
stack1.print()
stack1.peek()
stack1.pop()
stack1.pop()
stack1.isEmpty()
stack1.size
stack1.print()
