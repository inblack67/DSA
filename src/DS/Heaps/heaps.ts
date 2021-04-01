class MaxHeap {
    heap: number[];
    constructor () {
        this.heap = [];
    }
    getParentIndex (index: number) {
        const parentIndex = Math.floor((index - 1) / 2);
        return parentIndex;
    }
    getLeftChildInex (index: number) {
        const leftChildIndex = Math.floor((2 * index) + 1);
        return leftChildIndex;
    }
    getRightChildIndex (index: number) {
        const rightChildIndex = Math.floor((2 * index) + 2);
        return rightChildIndex;
    }
    swap (index1: number, index2: number) {
        const temp = this.heap[ index1 ];
        this.heap[ index1 ] = this.heap[ index2 ];
        this.heap[ index2 ] = temp;
    }
    insert () {

        // [ 20, 10, 30 ]
        let lastIndex = this.heap.length - 1; // 2
        const lastInsertedEl = this.heap[ lastIndex ]; // 30
        const parentOfLastInserted = this.heap[ this.getParentIndex(lastIndex) ]; // 20
        while (lastIndex > 0 && lastInsertedEl > parentOfLastInserted) {
            console.log('object');
            // 30 > 20
            this.heap[ lastIndex ] = this.heap[ this.getParentIndex(lastIndex) ]; // [ 20, 10, 20 ] 
            lastIndex = this.getParentIndex(lastIndex); // 0
        }
        this.heap[ lastIndex ] = lastInsertedEl; // [ 30, 10, 20 ];
    }
    create (arr: number[]) {
        for (let i = 1; i < arr.length; i++) {
            const el = arr[ i ];
            this.heap.push(el);
            this.insert();
        }
        this.heap.push(arr[ 0 ]);
    }
    display () {
        console.log(this.heap);
    }
}
const mh1 = new MaxHeap();
mh1.create([ 20, 10, 30 ]);
mh1.display();