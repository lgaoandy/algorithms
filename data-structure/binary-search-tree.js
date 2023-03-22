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
		let nodes = []
		const traverse = (node) => {
			if (node) {
				nodes.push(node.value)
				traverse(node.left)
				traverse(node.right)
			}
		}
		traverse(root)
		return nodes.join(" ")
	}

	// InOrder Depth First Search
	inOrderDFS(root = this.root) {
		let nodes = []
		const transverse = (node) => {
			if (node) {
				transverse(node.left)
				nodes.push(node.value)
				transverse(node.right)
			}
		}
		transverse(root)
		return nodes.join(" ")
	}

	// postOrder Depth First Search
	postOrderDFS(root = this.root) {
		let nodes = []
		const transverse = (node) => {
			if (node) {
				transverse(node.left)
				transverse(node.right)
				nodes.push(node.value)
			}
		}
		transverse(root)
		return nodes.join(" ")
	}

	levelOrder() {
		// Use the optimised queue implementation
		const queue = []
		const nodes = []
		queue.push(this.root)
		while (queue.length) {
			let curr = queue.shift()
			nodes.push(curr.value)
			if (curr.left) {
				queue.push(curr.left)
			}
			if (curr.right) {
				queue.push(curr.right)
			}
		}
		return nodes.join(" ")
	}

	min(root = this.root) {
		if (!root.left) {
			return root.value
		} else {
			return this.min(root.left)
		}
	}

	max(root = this.root) {
		if (!root.right) {
			return root.value
		} else {
			return this.max(root.right)
		}
	}

	delete(value) {
		this.root = this.deleteNode(this.root, value)
	}

	deleteNode(root, value) {
		if (root === null) {
			return root
		}

		if (value < root.value) {
			root.left = this.deleteNode(root.left, value)
		} else if (value > root.value) {
			root.right = this.deleteNode(root.right, value)
		} else {
			// case 1 - tree node
			if (!root.left && !root.right) {
				return null
			}
			if (!root.left) {
				return root.right
			} else if (!root.right) {
				return root.left
			}
			root.value = this.min(root.right)
			root.right = this.deleteNode(root.right, root.value)
		}
		return root
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

console.log("\n\x1b[33mPreorder Depth First Search\x1b[0m:", tree.preOrderDFS())
console.log("\x1b[33mInorder Depth First Search\x1b[0m:", tree.inOrderDFS())
console.log("\x1b[33mPostorder Depth First Search\x1b[0m:", tree.postOrderDFS())
console.log("\x1b[33mBreadth First Search\x1b[0m:", tree.levelOrder(), "\n")

console.log("\x1b[35mmin\x1b[0m():", tree.min())
console.log("\x1b[35mmax\x1b[0m():", tree.max())

console.log("\x1b[31mdelete\x1b[0m(%s)", 15, tree.delete(15))
tree.print()
