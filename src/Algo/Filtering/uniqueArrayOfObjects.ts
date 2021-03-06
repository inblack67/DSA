const getUniqueAOB = (arr: any[]): any[] => {
    const obj: any = {};
    const res: any = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const el = arr[ i ];
        if (count === 0) {
            obj[ el.name ] = true;
            count++;
        }
        if (obj[ el.name ]) {
            res.push(el);
            delete obj[ el.name ];
        }
    }
    return res;
};

const uniqueArrInput = [
    { "name": "john", "description": "doe", "isvalid": true }, { "name": "john", "description": "wick", "isvalid": false }
];

// filter by name
console.log(getUniqueAOB(uniqueArrInput));
