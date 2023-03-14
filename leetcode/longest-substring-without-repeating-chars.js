/* ** PROBLEM **
    Given a string s, find the length of the 
    longest substring without repeating characters.
*/

// First Solution
const lengthOfLongestSubstring = function (s) {
	if (s.length === 0) {
		return 0
	}

	let startPos = 0
	let endPos = 1

	let length = 1
	let substring = [s[0]] // array of characters
	let incrementLength = true

	do {
		if (incrementLength) {
			// Increments length
			endPos = startPos + length
			substring.push(s[endPos])
			length++
		} else {
			// Increments position
			startPos++
			endPos = startPos + length - 1
			substring.shift()
			substring.push(s[endPos])
		}

		// Check
		if (new Set(substring).size === length) {
			incrementLength = true
		} else {
			incrementLength = false
		}
	} while (endPos < s.length)

	return length - 1
}

// Optimize version of first solution
const lengthOfLongestSubstring_Optimize = function (s) {
	let start = 0
	let end = 1

	while (end <= s.length) {
		if (new Set(s.substring(start, end)).size !== end - start) {
			start++
		}
		end++
	}

	return end - start - 1
}

// Sliding Window
const lengthOfLongestSubstring_SlidingWindow = function (s) {
	let left = 0
	let set = new Set()
	let maxSize = 0

	if (s.length === 0 || s.length === 1) return s.length

	for (let i = 0; i < s.length; i++) {
		while (set.has(s[i])) {
			set.delete(s[left])
			left++
		}
		set.add(s[i])
		maxSize = Math.max(set.size, maxSize)
	}
	return maxSize
}

const tests = ["abcabcbb", "bbbbb", "pwwkew", "au", "", "bwf", "xxzqi"]

for (let x = 0; x < tests.length; x++) {
	console.log("lengthOfLongestSubstring(\x1b[32m%s\x1b[0m) = %s", tests[x], lengthOfLongestSubstring_SlidingWindow(tests[x]))
}
