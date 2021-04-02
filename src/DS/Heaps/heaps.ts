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
    delete () {
        if (this.heap.length === 0) {
            throw new Error('Heap is empty');
        }

        // [ 30, 10, 20 ]
        let index = 0;
        let nextIndex = this.getLeftChildInex(index);
        const root = this.heap[ index ];
        this.heap[ index ] = this.heap[ this.heap.length - 1 ];
        this.heap.pop(); // [ 20, 10 ]
        while (nextIndex < this.heap.length - 1) {
            if (this.heap[ nextIndex + 1 ] > this.heap[ nextIndex ]) {
                nextIndex += 1;
            }
            if (this.heap[ nextIndex ] > this.heap[ index ]) {
                this.swap(index, nextIndex);
                index = nextIndex;
                nextIndex = this.getLeftChildInex(nextIndex);
            } else {
                break;
            }
        }
        return root;
    }
    insert () {
        let i = this.heap.length - 1;
        let temp = this.heap[ i ];
        while (i > 0 && temp > this.heap[ this.getParentIndex(i) ]) {
            this.heap[ i ] = this.heap[ this.getParentIndex(i) ];
            i = this.getParentIndex(i);
        }
        this.heap[ i ] = temp;
    }
    create (arr: number[]) {
        for (let i = 0; i < arr.length; i++) {
            const el = arr[ i ];
            this.heap.push(el);
            this.insert();
        }
    }
    display () {
        console.log(this.heap);
    }
}
const mh1 = new MaxHeap();
// mh1.create([ 20, 10, 30 ]);
mh1.create([ 50, 10, 20, 30, 25, 5, 40, 35 ]);
// console.log(mh1.delete());
// console.log(mh1.delete());
// console.log(mh1.delete());
mh1.display();