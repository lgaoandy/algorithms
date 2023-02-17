/* 
    Given a staircase of n steps, count the number of distinct ways to climb to the top. 
    You can either climb 1 or 2 steps.

    Assumption that steps is an integer
    Time Complexity ~ O(n)
*/
function climbingStaircase(steps) {
	const noOfWays = [1, 2];

	for (let i = 2; i <= steps; i++) {
		noOfWays[i] = noOfWays[i - 2] + noOfWays[i - 1];
	}

	console.log("There are \x1b[32m%s\x1b[0m ways to climb a \x1b[33m%s\x1b[0m-step staircase", noOfWays[steps - 1], steps);
	return noOfWays[steps - 1];
}

climbingStaircase(4);
climbingStaircase(5);
climbingStaircase(6);
climbingStaircase(7);
climbingStaircase(8);
climbingStaircase(9);
climbingStaircase(10);
