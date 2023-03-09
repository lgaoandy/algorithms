class SimpleHashTable {
	constructor(size) {
		this.table = new Array(size)
		this.size = size
	}

	hash(key) {
		let total = 0
		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i)
		}
		return total % this.size
	}

	set(key, value) {
		const index = this.hash(key)
		const bucket = this.table[index]

		if (!bucket) {
			this.table[index] = [[key, value]]
		} else {
			const sameKeyItem = bucket.find((item) => item[0] === key)
			if (sameKeyItem) {
				sameKeyItem[1] = value
			} else {
				bucket.push([key, value])
			}
		}
	}

	get(key) {
		const index = this.hash(key)
		const bucket = this.table[index]
		if (bucket) {
			const sameKeyItem = bucket.find((item) => item[0] === key)
			if (sameKeyItem) {
				return sameKeyItem[1]
			}
		}
	}

	remove(key) {
		const index = this.hash(key)
		const bucket = this.table[index]
		if (bucket) {
			const sameKeyItem = bucket.find((item) => item[0] === key)
			if (sameKeyItem) {
				bucket.splice(bucket.indexOf(sameKeyItem), 1)
			}
		}
	}

	display() {
		let keyValuePairs = ""
		for (let i = 0; i < this.size; i++) {
			if (this.table[i]) {
				for (let j = 0; j < this.table[i].length; j++) {
					let [key, value] = this.table[i][j]
					keyValuePairs += `\n\t\x1b[33m${key}\x1b[0m: ${value}`
				}
			}
		}
		console.log("\x1b[36mprint\x1b[0m(): ", keyValuePairs, "\n")
	}
}

const table = new SimpleHashTable(50)

console.log("\x1b[32mset\x1b[0m(%s, %s):", "name", "Bruce", table.set("name", "Bruce"))
console.log("\x1b[32mset\x1b[0m(%s, %s):", "mane", "Alice", table.set("mane", "Alice"))
console.log("\x1b[35mget\x1b[0m(%s):", "name", table.get("name"))
table.display()

console.log("\x1b[31mremove\x1b[0m(%s):", "name", table.remove("name"))
table.display()

console.log("\x1b[32mset\x1b[0m(%s, %s):", "mane", "Jordan", table.set("mane", "Jordan"))
table.display()
