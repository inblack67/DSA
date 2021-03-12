class Queue {
    size: number;
    queue: number[];
    constructor () {
        this.size = 0;
        this.queue = [];
    }
    enqueue (el: number): number {
        this.queue.push(el);
        return ++this.size;
    }
    dequeue (): number {
        if (this.size === 0) {
            throw new Error('Queue is empty');
        }
        const enqueuedElement = this.queue.shift();
        this.size--;
        return enqueuedElement;
    }
    getSize () {
        return this.size;
    }
    display () {
        console.log(this.queue);
    }
}

const q1 = new Queue();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);
q1.dequeue();
q1.display();
console.log(q1.getSize());