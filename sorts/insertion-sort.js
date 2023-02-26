// Time Complexity O(n^2)
function sortElement(array, i) {
	let numToInsert = array[i];
	console.log(`\n\x1b[36m%s\x1b[0m\n`, `Sorting ${numToInsert}`);

	for (let j = i; j >= 0; j--) {
		if (array[j - 1] > numToInsert && j > 0) {
			array[j] = array[j - 1];
			console.log(`Shift ${array[j]} to (${j}): `, array);
		} else {
			array[j] = numToInsert;
			console.log(`Insert ${numToInsert} at (${j}): `, array);
			break;
		}
	}
}

function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		sortElement(array, i);
	}
	return array;
}

const ex1 = [-6, 20, 8, -2, 4];
const ex2 = [8, 3, 44, -9, -23];

// console.log(example1)
// console.log(insertionSort(example1))
console.log("\x1b[31m%s\x1b[0m", "Start: ", ex2);
console.log("\n\x1b[31m%s\x1b[0m", "Output: ", insertionSort(ex2));
