const memo = new Map<number, number>();
const getFibonacciSum = (range: number): number => {
    if (range <= 1) {
        memo.set(range, range);
        return range;
    }

    const saved = memo.get(range);
    if (saved) {
        return saved;
    }

    const cond1 = range - 1;
    const cond2 = range - 2;
    const fib = getFibonacciSum(cond1) + getFibonacciSum(cond2);
    memo.set(range, fib);
    return fib;

};

console.log(getFibonacciSum(5));