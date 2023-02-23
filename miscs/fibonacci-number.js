const fibonacci = function (n) {
	const fib = [0, 1];
	for (i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	console.log("\x1b[33mFibonacci\x1b[0m(\x1b[36m%s\x1b[0m) = \x1b[32m%s\x1b[0m", n, fib[n]);
	return fib[n];
};

for (j = 0; j <= 10; j++) {
	fibonacci(j);
}
