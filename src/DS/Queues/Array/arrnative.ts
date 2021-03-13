class MyNativeArrayQueue {
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
    dequeue (): number | undefined {
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

const mnaq = new MyNativeArrayQueue();
mnaq.enqueue(1);
mnaq.enqueue(2);
mnaq.enqueue(3);
mnaq.enqueue(4);
mnaq.dequeue();
mnaq.display();
console.log(mnaq.getSize());