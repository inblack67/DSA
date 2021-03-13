class MyCustomArrayQueue {
    size: number;
    queue: number[];
    length: number;
    constructor (size: number) {
        this.size = size;
        this.queue = new Array(size);
        this.length = 0;
    }
    enqueue (el: number): number {
        if (this.length === this.size) {
            throw new Error('Queue is full');
        }
        this.queue[ this.length ] = el;
        return ++this.length;
    }
    dequeue (): number {
        if (this.length === 0) {
            throw new Error('Queue is empty');
        }
        const enqueuedElement = this.queue[ 0 ];
        delete this.queue[ 0 ];

        for (let i = 1; i < this.length; i++) {
            const el = this.queue[ i ];
            this.queue[ i - 1 ] = el;
            delete this.queue[ i ];
        }

        this.length--;
        return enqueuedElement;
    }
    getSize () {
        return this.length;
    }
    display () {
        console.log(this.queue);
    }
}

const mcaq = new MyCustomArrayQueue(5);
mcaq.enqueue(1);
mcaq.enqueue(2);
mcaq.enqueue(3);
mcaq.enqueue(4);
mcaq.dequeue();
mcaq.dequeue();
mcaq.display();
console.log(mcaq.getSize());