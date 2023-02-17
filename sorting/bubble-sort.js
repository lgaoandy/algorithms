// Time Complexity O(n^2)
function bubbleSort(array) {
	let swapped;
	let iteration = 0;
	do {
		swapped = false;
		iteration += 1;
		console.log("\x1b[36m%s\x1b[0m", `\nIteration ${iteration}\n`);
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				let temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				swapped = true;
				console.log(`Swapping ${array[i]} and ${array[i + 1]} :`, array);
			} else {
				console.log(`${array[i]} is less than ${array[i + 1]}`);
			}
		}
	} while (swapped === true);
	return array;
}

const ex1 = [8, 20, -2, 4, -6];

console.log("\x1b[31m%s\x1b[0m", "Start: ", ex1);
console.log("\n\x1b[31m%s\x1b[0m", "Output: ", bubbleSort(ex1));
