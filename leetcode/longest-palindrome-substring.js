/* ** PROBLEM **
    Given a string s, return the longest palindromic substring in s
*/

const isPalidrome = function (s) {
	let leftPointer = 0
	let rightPointer = s.length - 1
	while (leftPointer < rightPointer) {
		if (s[leftPointer] !== s[rightPointer]) {
			return false
		} else {
			leftPointer++
			rightPointer--
		}
	}
	return true
}

// Approach - loop through up down, until a palidrome is found and return
const longestPalidrome = function (s) {
	let length = s.length
	while (length > 1) {
		for (let i = 0; i <= s.length - length; i++) {
			let substring = s.substring(i, i + length)
			if (isPalidrome(substring)) {
				return substring
			}
		}
		length--
	}
	return s[0]
}

const ex1 = "babad"
const ex2 = "cbbd"

console.log(longestPalidrome(ex1))
console.log(longestPalidrome(ex2))
