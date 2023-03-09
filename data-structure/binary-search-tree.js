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

    print() {
        printBinaryTree(this)
    }
}

const tree = new BinarySearchTree()
console.log("\x1b[35misEmpty\x1b[0m(): %s", tree.isEmpty())

tree.insert(20)
tree.insert(155)
tree.insert(895)
tree.insert(32)
tree.insert(65)
tree.insert(5)

tree.print()
