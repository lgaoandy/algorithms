// Time complexity - O(min(m, n)mn)
const longestCommonSubstring = function (text1, text2) {
	let length = Math.min(text1.length, text2.length)

	for (let k = length; k > 0; k--) {
		for (let i = 0; i < text1.length - k + 1; i++) {
			const targetSubstring = text1.substring(i, i + k)
			const index = text2.indexOf(targetSubstring)

			if (index >= 0) {
				console.log("LCS(\x1b[33m%s\x1b[0m, \x1b[33m%s\x1b[0m) = \x1b[32m%s\x1b[0m", text1, text2, targetSubstring)
				return targetSubstring
			}
		}
	}
	console.log("LCS(\x1b[33m%s\x1b[0m, \x1b[33m%s\x1b[0m) = \x1b[32m%s\x1b[0m", text1, text2, 0)
	return 0
}

longestCommonSubstring("ababc", "babca")
longestCommonSubstring("brass instrument", "grass")
longestCommonSubstring("urban dictionary", "suburbs")
longestCommonSubstring("deforestation", "manifestation")
longestCommonSubstring("cyan", "cyan")
longestCommonSubstring("template", "temple")
longestCommonSubstring("abc", "def")
