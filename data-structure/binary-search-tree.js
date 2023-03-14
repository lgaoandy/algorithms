const printBinaryTree = require("../miscs/print-binary-tree")

class TreeNode {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	isEmpty() {
		return this.root === null
	}

	insert(value) {
		const node = new TreeNode(value)

		if (this.isEmpty()) {
			this.root = node
		} else {
			let parent = this.root
			while (true) {
				if (node.value < parent.value) {
					// transverse left
					if (parent.left === null) {
						parent.left = node
						return
					} else {
						parent = parent.left
					}
				} else {
					// transverse right
					if (parent.right === null) {
						parent.right = node
						return
					} else {
						parent = parent.right
					}
				}
			}
		}
	}

	// verifies if a value exists in the tree
	search(value) {
		let parent = this.root
		while (parent) {
			if (parent.value === value) {
				return true
			} else if (parent.value > value) {
				parent = parent.left
			} else {
				parent = parent.right
			}
		}
		return false
	}

	// Preorder Depth First Search
	preOrderDFS(root = this.root) {
		if (root) {
			console.log(root.value)
			this.preOrderDFS(root.left)
			this.preOrderDFS(root.right)
		}
	}

	// InOrder Depth First Search
	inOrderDFS(root = this.root) {
		if (root) {
			this.inOrderDFS(root.left)
			console.log(root.value)
			this.inOrderDFS(root.right)
		}
	}

	// postOrder Depth First Search
	postOrderDFS(root = this.root) {
		if (root) {
			this.postOrderDFS(root.left)
			this.postOrderDFS(root.right)
			console.log(root.value)
		}
	}

	print() {
		printBinaryTree(this)
	}
}

const tree = new BinarySearchTree()
console.log("\x1b[35misEmpty\x1b[0m():", tree.isEmpty())

console.log("\x1b[32minsert\x1b[0m(%s)", 10, tree.insert(10))
console.log("\x1b[32minsert\x1b[0m(%s)", 5, tree.insert(5))
console.log("\x1b[32minsert\x1b[0m(%s)", 15, tree.insert(15))
console.log("\x1b[32minsert\x1b[0m(%s)", 3, tree.insert(3))
tree.print()

console.log("\x1b[32minsert\x1b[0m(%s)", 7, tree.insert(7))
console.log("\x1b[32minsert\x1b[0m(%s)", 21, tree.insert(21))
console.log("\x1b[32minsert\x1b[0m(%s)", 10, tree.insert(10))

tree.print()
console.log("\x1b[35msearch\x1b[0m(%s):", 1, tree.search(1))
console.log("\x1b[35msearch\x1b[0m(%s):", 10, tree.search(10))
console.log("\x1b[35msearch\x1b[0m(%s):", 11, tree.search(11))
console.log("\x1b[35msearch\x1b[0m(%s):", 21, tree.search(21))

console.log("\n\x1b[31mPreorder Depth First Search\x1b[0m:")
tree.preOrderDFS()

console.log("\n\x1b[31mInorder Depth First Search\x1b[0m:")
tree.inOrderDFS()

console.log("\n\x1b[31mPostorder Depth First Search\x1b[0m:")
tree.postOrderDFS()
