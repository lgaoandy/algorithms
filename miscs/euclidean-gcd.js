// Time complexity - O(log(a + b))
function gcd(num1, num2, parent = [num1, num2]) {
	const dividend = Math.max(num1, num2);
	const divisor = Math.min(num1, num2);
	const remainder = dividend % divisor;

	if (remainder !== 0) {
		return gcd(divisor, remainder, parent);
	}

	console.log("GCD of \x1b[33m%s\x1b[0m and \x1b[33m%s\x1b[0m is \x1b[32m%s\x1b[0m", parent[0], parent[1], divisor);
	return divisor;
}

gcd(888, 54);
gcd(54, 888);
gcd(461952, 116298);
gcd(42, 56);
