const stairsMemo = new Map<number, number>();

function climbStairs (n: number): number {
    if (n === 0) {
        return 1; // 0 => stay there => 1 path => 0 to 0
    }
    if (n < 0) {
        return 0;
    }
    const saved = stairsMemo.get(n);
    if (saved) {
        return saved;
    }
    const way1 = climbStairs(n - 1);    // one stair at a time
    const way2 = climbStairs(n - 2); // two stairs at a time
    const res = way1 + way2;
    stairsMemo.set(n, res);
    return res;
};

console.log(climbStairs(2));
console.log(climbStairs(3));

// no recursion in tab
const climbStairsTabulation = (n: number) => {
    const dp = new Array(n + 1).fill(0);
    dp[ 0 ] = 1;    // 0 => stay there => 1 path => 0 to 0
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            dp[ i ] = dp[ i - 1 ];
        } else {
            dp[ i ] = dp[ i - 1 ] + dp[ i - 2 ];  // 1 stairs or 2 stairs at a time
        }
    }
    return dp[ n ];
};

console.log(climbStairsTabulation(2));
console.log(climbStairsTabulation(3));