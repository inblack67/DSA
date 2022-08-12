const minPathSum = ( maze: number[][] ) => {
	const dp = new Array( maze.length ).fill( null ).map( () => new Array( maze[0].length ).fill( 0 ) );
	for ( let i = dp.length - 1; i >= 0; i-- ) {
		for ( let j = dp[0].length - 1; j >= 0; j-- ) {
			const cell = maze[i][j];
			if ( i === dp.length - 1 && j === dp[0].length - 1 ) {
				dp[i][j] = maze[i][j];
			} else if ( i === dp.length - 1 ) {
				// last row
				dp[i][j] = cell + dp[i][j + 1];
			} else if ( j === dp[0].length - 1 ) {
				// last col
				dp[i][j] = cell + dp[i + 1][j];
			} else {
				dp[i][j] = cell + Math.min( dp[i + 1][j], dp[i][j + 1] );
			}
		}
	}
	return dp[0][0];
};


console.log(
	minPathSum( [
		[1, 2, 3],
		[4, 5, 6],
	] ),
); // 12
console.log(
	minPathSum( [
		[1, 3, 1],
		[1, 5, 1],
		[4, 2, 1],
	] ),
); // 7


console.log( minPathSum(
	[[0, 1, 4, 2, 8, 2],
	[4, 3, 6, 5, 0, 4],
	[1, 2, 4, 1, 4, 6],
	[2, 0, 7, 3, 2, 2],
	[3, 1, 5, 9, 2, 4],
	[2, 7, 0, 8, 5, 1],]
) );

