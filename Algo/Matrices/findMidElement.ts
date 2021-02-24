
const findMidElementOfMatrix = (image: number[][]): number => {
    const rows = image.length;
    const cols = image[ 0 ].length;

    const midRowIndex = Math.floor(rows / 2);
    const midColIndex = Math.floor(cols / 2);

    const midEl = image[ midRowIndex ][ midColIndex ];
    return midEl;
};

console.log(findMidElementOfMatrix([ [ 1, 1, 1 ],
[ 1, 7, 1 ],
[ 1, 1, 1 ], ]));