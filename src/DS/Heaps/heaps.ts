class MaxHeap {
    heap: number[];
    constructor () {
        this.heap = [];
    }
    getParentIndex (index: number) {
        const parentIndex = (index - 1) / 2;
        return Math.floor(parentIndex);
    }
    getLeftChild (index: number) {
        const leftChildIndex = (2 * index) + 1;
        return Math.floor(leftChildIndex);
    }
    getRightChild (index: number) {
        const rightChildIndex = (2 * index) + 2;
        return Math.floor(rightChildIndex);
    }
    swap (index1: number, index2: number) {
        const temp = this.heap[ index1 ];
        this.heap[ index1 ] = this.heap[ index2 ];
        this.heap[ index2 ] = temp;
    }
    heapify (index: number) {
        const parentIndex = this.getParentIndex(index);
        while (this.heap[ index ] > this.heap[ parentIndex ]) {
            this.swap(index, parentIndex);
        }
    }
    insert (el: number) {
        this.heap.push(el);
        this.heapify(this.heap.length - 1);
    }
    create (arr: number[]) {
        arr.forEach((el) => {
            this.insert(el);
        });
    }
    display () {
        console.log(this.heap);
    }
}

const h1 = new MaxHeap();
const heapData = [ 10, 20, 30 ];
h1.create(heapData);
h1.display();
console.log(heapData);