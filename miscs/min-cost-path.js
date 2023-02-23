/*
    ** Min Cost Path **
    Given a cost matrix cost[][] and a position (M, N) in cost[][], 
    write a function that returns 
        cost of minimum cost path to reach (M, N) from (0, 0). 
    
    Each cell of the matrix represents a cost to traverse through that cell. 
    The total cost of a path to reach (M, N) 
        is the sum of all the costs on that path (including both source and destination). 
    You can only traverse down, right and diagonally lower cells from a given cell, 
        i.e., from a given cell (i, j), cells (i+1, j), (i, j+1), and (i+1, j+1) can be traversed. 
    
    Example: cost = [[1, 2, 3], [4, 8, 2], [1, 5, 3]] 
    can be presented as:

    === === ===
    \1\ \2\ \3\
    === === ===
    \4\ \8\ \2\
    === === ===
    \1\ \5\ \3\
    === === ===
    
    the path  to minimum cost would be (0, 0) => (0, 1) => (1, 2) => (2, 2).
    The minimum cost is 8 (1+2+2+3)
*/

const minCostPath = function (cost, m, n) {
	// Create a matrix array to represent the minCost based on the position
	let minCost = new Array(m + 1).fill([]);
	minCost = minCost.map(() => new Array(n + 1).fill(Number.MAX_VALUE));

	/* Dynamic Programming - Tabulation method */
	// Set up i as the iterative x position (m)
	for (let i = 0; i <= m; i++) {
		// Set up j as the iterative y position (n)
		for (let j = 0; j <= n; j++) {
			if (j >= 0) {
				let predecessors = []; // arrays that are left, above or diagonally upper-left of the current position
				let predecessorCost = 0; // if this position has predecessors, then it should inherit the lowest value

				if (i > 0) {
					predecessors.push(minCost[i - 1][j]);
				}
				if (j > 0) {
					predecessors.push(minCost[i][j - 1]);
				}
				if (i > 0 && j > 0) {
					predecessors.push(minCost[i - 1][j - 1]);
				}

				if (predecessors.length > 0) {
					predecessorCost = Math.min(...predecessors);
				}

				minCost[i][j] = predecessorCost + cost[i][j];
			}
		}
	}

	console.log("\n\x1b[31mGiven matrix\x1b[0m: ");
	for (let i = 0; i <= m; i++) {
		console.log("\t", cost[i]);
	}
	console.log("\n\x1b[36m%s\x1b[0m(\x1b[33m%s\x1b[0m, \x1b[33m%s\x1b[0m) = \x1b[32m%s\x1b[0m", "minCostPath", m, n, minCost[m][n]);
	return minCost[m][n];
	// Note the relationship of minCost[M][N] = Math.min(minCost[M - 1, N], minCost[M, N - 1], minCost[M - 1, N - 1]) + cost[M, N]
};

/* Test Examples */
const array1 = [
	[1, 2, 3],
	[4, 8, 2],
	[1, 5, 3],
];
const array2 = [
	[9, 22, 3, 8, 6],
	[12, 18, 3, 5, 1],
	[10, 8, 3, 5, 1],
];
const array3 = [
	[1, 9, 9],
	[9, 1, 9],
	[9, 9, 1],
	[9, 1, 9],
	[1, 9, 9],
	[9, 1, 9],
	[9, 9, 1],
];

minCostPath(array1, 2, 2);
minCostPath(array2, 2, 4);
minCostPath(array3, 6, 2);
