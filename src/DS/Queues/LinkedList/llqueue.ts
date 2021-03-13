class MyLLNode {
    data: number;
    next: null | MyLLNode;
    constructor (data: number, next: null | MyLLNode = null) {
        this.data = data;
        this.next = next;
    }
}

class MyLLQueue {
    head: null | MyLLNode;
    size: number;
    constructor () {
        this.head = null;
        this.size = 0;
    }
    enqueue (el: number) {
        const newNode = new MyLLNode(el);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        this.size++;
    }

    dequeue () {
        if (!this.head) {
            throw new Error('Queue is empty');
        }
        if (!this.head.next) {
            this.head = null;
        } else {
            this.head = this.head.next;
        }
        this.size--;
    }
    display () {
        if (!this.head) {
            console.log(this.head);
        }
        else {
            let currentNode: MyLLNode | null = this.head;
            while (currentNode) {
                console.log(currentNode.data);
                currentNode = currentNode.next;
            }
        }
    }
    getSize () {
        return this.size;
    }
}

const mllq = new MyLLQueue();
mllq.enqueue(1);
mllq.enqueue(2);
mllq.enqueue(3);
mllq.enqueue(4);
mllq.dequeue();
mllq.dequeue();
mllq.dequeue();
mllq.dequeue();
mllq.display();
console.log(mllq.getSize());