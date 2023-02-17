// Time Complexity O(n^2)
function selectionSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
		console.log("\x1b[36m%s\x1b[0m", `\nPosition ${i}`);

		// Find smallest
		let j = i;
		let smallest = array[i];
		console.log("\x1b[32m%s\x1b[0m", `array[${i}] = min = ${smallest}`);

		for (let k = i + 1; k < array.length; k++) {
			if (array[k] < smallest) {
				console.log("%s, \x1b[32m%s\x1b[0m", `array[${k}] = ${array[k]} (smaller)`, `min = ${smallest} -> ${array[k]}`);
				smallest = array[k];
				j = k;
			} else {
				console.log(`array[${k}] = ${array[k]} (greater)`);
			}
		}

		// Swap elements
		if (array[j] != array[i]) {
			array[j] = array[i];
			array[i] = smallest;
			console.log(`\nSwap ${array[i]} with ${array[j]}: `, array);
		}
	}
	return array;
}

const ex1 = [-6, 20, 8, -2, 4];
const ex2 = [8, 3, 44, -9, -23];

// console.log(example1)
// console.log(insertionSort(example1))
console.log("\x1b[31m%s\x1b[0m", "Start: ", ex2);
console.log("\n\x1b[31m%s\x1b[0m", "Output: ", selectionSort(ex2));
