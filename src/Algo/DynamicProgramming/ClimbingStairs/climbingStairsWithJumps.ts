const climbStairsWithJumps = (jumps: number[]) => {
    console.log(jumps);
    const dest = jumps.length;  // 5
    const dp = new Array(dest + 1).fill(0); // [ 0, 0, 0, 0, 0, 0 ]
    dp[ dest ] = 1;
    for (let i = dest - 1; i >= 0; i--) {
        const el = jumps[ i ];
        console.log(el);
        for (let j = 1; j <= el && (i + j) < dp.length; j++) {
            dp[ i ] += dp[ i + j ];
        }
    }
    console.log(dp);
};

console.log(climbStairsWithJumps([ 3, 3, 0, 2, 3 ]));