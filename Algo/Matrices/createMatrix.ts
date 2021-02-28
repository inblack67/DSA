const createMatrix = (rows: number, cols: number, filling: any): number[][] => {
    const matrix: number[][] = [];
    for (let i = 0; i < rows; i++) {
        matrix[ i ] = new Array(cols).fill(filling);
    }

    // for (let i = 0; i < rows; i++) {
    //     matrix[ i ] = [];
    //     for (let j = 0; j < cols; j++) {
    //         matrix[ i ][ j ] = filling;
    //     }
    // }

    return matrix;
};
