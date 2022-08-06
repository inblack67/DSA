const solveNQueensBranchAndBound = ( board: number[][], row: number, cols: boolean[], diags1: boolean[], diags2: boolean[], ans = '' ): void => {
	if ( row === board.length ) {
		console.log( ans + "." );
		return;
	}

	for ( let i = 0; i < board[0].length; i++ ) {
		const diags1CheckIndex = row + i;
		const diags2CheckIndex = row - i + board.length;
		if ( !cols[i] && !diags1[diags1CheckIndex] && !diags2[diags2CheckIndex] ) {
			board[row][i] = 1;
			cols[i] = true;
			diags1[diags1CheckIndex] = true;
			diags2[diags2CheckIndex] = true;

			solveNQueensBranchAndBound( board, row + 1, cols, diags1, diags2, ans + `${row}-${i}, ` );

			board[row][i] = 0;
			cols[i] = false;
			diags1[diags1CheckIndex] = false;
			diags2[diags2CheckIndex] = false;
		}
	}
};

const boardSize = 4;

const board = Array( boardSize )
	.fill( null )
	.map( () => Array( boardSize ).fill( 0 ) );

const cols = new Array( 2 * boardSize - 1 ).fill( false );
const diags1 = new Array( 2 * boardSize - 1 ).fill( false );
const diags2 = new Array( 2 * boardSize - 1 ).fill( false );

solveNQueensBranchAndBound( board, 0, cols, diags1, diags2 );
