/* 
    _PROBLEM_:
    Given a rod of length n inches and an array of prices that includes prices 
    of all pieces of size smaller than n. Determine the maximum value obtainable 
    by cutting up the rod and selling the pieces. 
    
    For example, if the length of the rod is 8 and the values of different pieces 
    are given as the following, then the maximum obtainable value is 22 
    (by cutting in two pieces of lengths 2 and 6) 

    length   | 1   2   3   4   5   6   7   8  
    --------------------------------------------
    price    | 1   5   8   9  10  17  17  20

*/

// Brute Force
const cuttingRods = function (prices, n) {
	// Index will be treated as the length of which they sell at
	prices.unshift(0)

	// Define an array storing the maxValue prices for every previous length
	let bestValue = []
	let bestValueRods = [[]]

	// By default, a rod at zero length will be worth zero value
	bestValue[0] = 0

	// Iterate through prices to find the bestValue at every length
	for (let i = 1; i <= n; i++) {
		let maxSellValue = 0 // Set up max value used for iteration
		let maxSellingRods = [] // Set up array to store the rods at max sell value

		/* 
			To calculate the bestvalue for each lengt, 
			we are try selling at every length with 
			any remaining length sold at the bestValue we obtained previously 
		*/
		for (let j = 1; j <= Math.min(n, prices.length); j++) {
			let sellValue = prices[j] + bestValue[i - j]

			// Update the best sell value
			if (sellValue > maxSellValue) {
				maxSellValue = sellValue
				maxSellingRods = [j].concat(bestValueRods[i - j])
			}
		}

		// After iterating through all possible outcomes, the maxSellValue will be the bestValue for this length
		bestValue[i] = maxSellValue
		bestValueRods[i] = maxSellingRods
	}

	console.log("cuttingRods(\x1b[33m%s\x1b[0m) = \x1b[32m$%s\x1b[0m", n, bestValue[n], bestValueRods[n])
	return bestValue[n]
}

for (i = 1; i <= 16; i++) {
	cuttingRods([1, 5, 8, 9, 10, 17, 17, 20], i)
}
