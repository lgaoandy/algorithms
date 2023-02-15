function quickSort(array) {
	if (array.length <= 1) {
		return array;
	}

	const pivot = array[array.length - 1];
	console.log(`\n\x1b[36m%s\x1b[0m%s\n`, `Quick sorting: `, array);

	let leftArray = [];
	let rigthArray = [];
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] < pivot) {
			leftArray.push(array[i]);
		} else {
			rigthArray.push(array[i]);
		}
	}
	console.log(leftArray, pivot, rigthArray);

	return [...quickSort(leftArray), pivot, ...quickSort(rigthArray)];
}
const ex1 = [-6, 20, 8, -2, 4];
const ex2 = [8, 3, 44, -9, -23];

// console.log(example1)
// console.log(insertionSort(example1))
console.log("\x1b[31m%s\x1b[0m", "Start: ", ex2);
console.log("\n\x1b[31m%s\x1b[0m", "Output: ", quickSort(ex2));
