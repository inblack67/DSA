const climbStairsWithMinMoves = (jumps: number[]) => {
    const dp = new Array(jumps.length + 1);
    dp[ dp.length - 1 ] = 1;
    console.log(dp);
    for (let i = dp.length - 2; i >= 0; i--) {
        const jumpsAllowed = jumps[ i ];
        if (jumpsAllowed !== 0) {
            const probs: number[] = [];
            for (let j = 1; j <= jumpsAllowed && (i + j) < dp.length; j++) {
                const target = dp[ i + j ];
                if (target !== undefined) {
                    probs.push(target);
                }
            }
            if (probs.length > 0) {
                const min = Math.min(...probs);
                dp[ i ] = min + 1;
            }
        }
    }
    return dp[ 0 ];
};

console.log(climbStairsWithMinMoves([ 3, 3, 0, 2, 3 ]));