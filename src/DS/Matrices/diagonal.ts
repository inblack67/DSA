const getDiagonalMatrix2D = (size: number, diagonalElements: number[]): number[][] => {
    const mat: number[][] = new Array(size);
    for (let i = 0; i < mat.length; i++) {
        const arr = new Array(size);
        mat[ i ] = arr;
    }
    for (let i = 0; i < mat.length; i++) {
        const arr = mat[ i ];
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                arr[ j ] = diagonalElements[ j ];
            } else {
                arr[ j ] = 0;
            }
        }
    }
    return mat;
};

const getDiagonalMatrix = (elems: number[]): number[] => {
    const mat: number[] = new Array(elems.length);
    for (let i = 0; i < mat.length; i++) {
        mat[ i ] = elems[ i ];
    }
    return mat;
};

const getElem = (mat: number[], row: number, col: number): number => {
    if (row === col) {
        return mat[ row - 1 ];
    }
    return 0;
};

const mat = getDiagonalMatrix([ 1, 2, 3, 4, 5 ]);
console.log(getElem(mat, 5, 5));