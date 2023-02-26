// Time Complexity O(nlogn)
function mergeSort(array) {
	if (array.length === 1) {
		return array;
	}

	const median = Math.floor(array.length / 2);
	const leftArray = array.slice(0, median);
	const rightArray = array.slice(median);
	console.log(`\n\x1b[36m%s\x1b[0m\n`, `Split into subarrays:`, leftArray, rightArray);

	return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left, right) {
	let combined = [];

	while (left.length > 0 || right.length > 0) {
		if (left.length > 0 && right.length > 0) {
			if (left[0] < right[0]) {
				combined.push(left.shift());
			} else {
				combined.push(right.shift());
			}
		} else if (left.length > 0) {
			combined.push(left.shift());
		} else if (right.length > 0) {
			combined.push(right.shift());
		}
	}

	console.log(`\n\x1b[32m%s\x1b[0m\n`, `Merge subarrays:`, combined);
	return combined;
}

const ex1 = [-6, 20, 8, -2, 4];

console.log("\x1b[31m%s\x1b[0m", "Start: ", ex1);
console.log("\n\x1b[31m%s\x1b[0m", "Finish: ", mergeSort(ex1));
