// Time Complexity O(nm)
function cartesianProduct(set1, set2) {
	let product = [];
	for (let i = 0; i < set1.length; i++) {
		for (let j = 0; j < set2.length; j++) {
			product.push([set1[i], set2[j]]);
		}
	}

	console.log("Array 1: ", set1);
	console.log("Array 2: ", set2);
	console.log("Result: ", product);
	return product;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];

cartesianProduct(arr1, arr2);
