/*
    ** PROBLEM **
    The DNA sequence is composed of 
    a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

    For example, "ACGAATTCCG" is a DNA sequence.
    When studying DNA, it is useful to identify repeated sequences within the DNA.

    Given a string s that represents a DNA sequence, 
    return all the 10-letter-long sequences (substrings) that occur 
    more than once in a DNA molecule. You may return the answer in any order.    

*/

const findRepeatedDnaSequences = function (s) {
	let strands = new Set()
	let repeated = new Set()

	if (s.length <= 10) {
		return []
	}
	for (let i = 0; i <= s.length - 10; i++) {
		let strand = s.substring(i, i + 10)
		if (strands.has(strand)) {
			repeated.add(strand)
		}
		strands.add(strand)
	}
	return [...repeated]
}

const tests = ["AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", "AAAAAAAAAAAAA", "AAAAAAAAAAA"]

for (let x = 0; x < tests.length; x++) {
	console.log("findRepeatedDnaSequences(\x1b[32m%s\x1b[0m) = %s", tests[x], findRepeatedDnaSequences(tests[x]))
}
