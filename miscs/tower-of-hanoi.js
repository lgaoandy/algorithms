// Time Complexity O(2^n)
function towerOfHanoi(n, fromRod, toRod, usingRod) {
	if (n === 1) {
		console.log(`Move disk \x1b[36m1\x1b[0m from ${fromRod} to ${toRod}`);
		return;
	}

	towerOfHanoi(n - 1, fromRod, usingRod, toRod);
	console.log(`Move disk \x1b[36m%s\x1b[0m from %s to %s`, n, fromRod, toRod);
	towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(4, "A", "C", "B");
