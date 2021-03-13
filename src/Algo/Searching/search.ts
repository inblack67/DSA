class Search {
    arr: number[];
    length: number;
    constructor (arr: number[]) {
        this.arr = arr;
        this.arr.sort();
        this.length = this.arr.length;
    }
    display () {
        return this.arr;
    }
    linearSearch (el: number): number {
        let foundAt = -1;
        for (let i = 0; i < this.length; i++) {
            const element = this.arr[ i ];
            if (el === element) {
                foundAt = i;
                return foundAt;
            }
        }
        return foundAt;
    }
    binarySearch (el: number): number {
        let low = 0;
        let high = this.length;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            const midEl = this.arr[ mid ];
            if (el === midEl) {
                return mid;
            }
            if (el < midEl) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return -1;
    }
    nativeSearch (el: number): number {
        const foundAt = this.arr.findIndex((v) => v === el);
        return foundAt;
    }
}

const arr = [ 1, 2, 3, 66, 4, 5 ];
const s1 = new Search(arr);

console.log(s1.nativeSearch(2));
console.log(s1.linearSearch(66));
console.log(s1.binarySearch(66));

console.log(s1.display());