/* ** PROBLEM **
    Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses 

	Constraints:
	1 <= n <= 8
*/

const generateParenthese = function (n) {
	let res = []

	const iterate = (str, open, closed) => {
		if (open > n || closed > n || closed > open) return
		if (str.length === n * 2 && open === n && closed === n) {
			return res.push(str)
		}
		iterate(str + "(", open + 1, closed)
		iterate(str + ")", open, closed + 1)
	}

	iterate("", 0, 0)
	return res
}

console.log(generateParenthese(2))
console.log(generateParenthese(3))
console.log(generateParenthese(4))
