/*
    _Problem_:
    Given an integer n, 
    return the number of prime numbers that are strictly less than n
*/

// Brute Force - O(n log n)
const countPrimes = function (n) {
	// define an array representing prime numbers in sequence
	let primes = [];

	// Look for prime numbers - start at 2 because 1 is not a prime
	for (let i = 2; i < n; i++) {
		let isPrime = true;
		for (let j = 0; j < primes.length; j++) {
			if (i % primes[j] === 0) {
				isPrime = false;
				break;
			}
		}

		if (isPrime) {
			primes.push(i);
		}
	}

	console.log("countingPrime(\x1b[33m%s\x1b[0m) = \x1b[32m%s\x1b[0m", n, primes.length, primes);
	return primes.length;
};

// Optimal Solution - Sieve of Eratosthenes - O(n log log n)
const sieveOfEratosthenes = function (n) {
	// Define a hash map presenting numbers by index, boolean dictates if they are prime or not
	let hash = new Array(n).fill(true).fill(false, 0, 2);

	// Using sieve of Eratosthenes algorithm, toggles false all multiples within n
	for (let i = 2; i * i < n; i++) {
		if (hash[i]) {
			for (let j = i * i; j < n; j += i) {
				hash[j] = false;
			}
		}
	}

	// Get primes
	let primes = [];
	for (let k = 2; k < hash.length; k++) {
		if (hash[k]) {
			primes.push(k);
		}
	}

	console.log(primes.length, primes);
	return primes.length;
};

countPrimes(10);
countPrimes(30);
countPrimes(100);
countPrimes(200);
