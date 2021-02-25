const getFibonacci = (upTo: number): number[] => {
    if (upTo <= 1) {
        return [ 1 ];
    }
    const uptoArr = [];
    for (let i = 0; i < upTo; i++) {
        uptoArr[ i ] = i;
    }

    const fib = [ 1, 1 ];

    for (let i = 0; i < uptoArr.length; i++) {
        const el = uptoArr[ i ];
        if (el > 1) {
            const sum = fib[ i - 2 ] + fib[ i - 1 ];
            fib.push(sum);
        }
    }
    return fib;
};