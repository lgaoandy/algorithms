/*
    ** PROBLEM **
    Given an array of integers of size n, 
    Our aim is to calculate the maximum sum of k consecutive elements in the array.
	
    Use the sliding window technique

    Return -1 if the k is greater than n

*/

const maxConsecutiveSum = function (array, k) {
	// define n as size
	const n = array.length

	// invalid case
	if (k > n) {
		return -1
	}

	// define current sum
	let currentSum = 0

	// get the outcome for the first window
	for (let i = 0; i < k; i++) {
		currentSum += array[i]
	}

	let maxSum = currentSum

	// sliding window technique
	for (let i = 1; i <= n - k; i++) {
		currentSum = currentSum - array[i - 1] + array[i + k - 1]

		if (currentSum > maxSum) {
			maxSum = currentSum
		}
	}

	return maxSum
}

console.log(maxConsecutiveSum([100, 200, 300, 400, 500, 600], 2))
console.log(maxConsecutiveSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))
console.log(maxConsecutiveSum([2, 3], 3))
