const printBinaryTree = (binaryTree) => {
    if (binaryTree.isEmpty()) {
        return
    }

    console.log("\x1b[36mprint\x1b[0m():\n")
    let layers = []
    let level = 0
    let maxChar = 0
    let parents = [binaryTree.root]

    while (parents.length > 0) {
        if (parents.every((node) => !node)) {
            break
        }

        layers[level] = []
        let numOfParents = parents.length

        for (let i = 0; i < numOfParents; i++) {
            let currParent = parents[i]

            if (currParent) {
                layers[level].push(currParent.value.toString())
                parents.push(currParent.left)
                parents.push(currParent.right)

                maxChar = Math.max(currParent.value.toString().length, maxChar)
            } else {
                parents.push(null)
                parents.push(null)
                layers[level].push("-")
            }
        }
        parents = parents.slice(numOfParents)
        level++
    }

    let gridSpaces = [1]
    for (let i = 0; i <= maxChar; i++) {
        gridSpaces[i + 1] = 2 * gridSpaces[i] + 1
    }
    gridSpaces = gridSpaces.map((space) => space * maxChar)

    for (let i = 0; i < layers.length; i++) {
        let currLayer = layers[i]

        // Pad all nodes to maxChar
        for (let j = 0; j < currLayer.length; j++) {
            if (maxChar - currLayer[j].length > 0) {
                layers[i][j] = layers[i][j]
                    .padStart(Math.ceil(maxChar / 2), " ")
                    .padEnd(maxChar, " ")
            }
        }

        // Print row
        let leftPadding = gridSpaces[level - i - 2] || 0
        let midPadding = gridSpaces[level - i - 1]
        let textRow = new Array(leftPadding + 1).join(" ")

        if (i === 0) {
            console.log(textRow + currLayer[0])
        } else {
            for (let j = 0; j < currLayer.length; j++) {
                textRow += currLayer[j] + new Array(midPadding + 1).join(" ")
            }
            console.log(textRow)
        }
    }
}

module.exports = printBinaryTree
