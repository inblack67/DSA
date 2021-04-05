const getFactorial = (range: number): number => {
    if (range <= 1) {
        return 1;
    }
    return range * getFactorial(range - 1);
};

const getFactorialDP = (range: number) => {
    const dp = new Array(range);
    for (let i = 0; i < dp.length; i++) {
        dp[ i ] = i + 1;
    }
    for (let i = 2; i < dp.length; i++) {
        dp[ i ] *= dp[ i - 1 ];
    }
    return dp[ range - 1 ];
};

console.log(getFactorialDP(5));

const iterativePermutations = (str: string) => {

};

console.log(iterativePermutations('abc'));