class Queue {
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

const q1 = new Queue(5);
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);
q1.dequeue();
q1.dequeue();
q1.display();
console.log(q1.getSize());