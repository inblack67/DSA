class MyNode {
    data: number;
    next: MyNode;
    constructor (data: number, next: MyNode = null) {
        this.data = data;
        this.next = next;
    }
}

class MyQueue {
    head: MyNode;
    size: number;
    constructor () {
        this.head = null;
        this.size = 0;
    }
    enqueue (el: number) {
        const newNode = new MyNode(el);
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
            let currentNode = this.head;
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

const ll1 = new MyQueue();
ll1.enqueue(1);
ll1.enqueue(2);
ll1.enqueue(3);
ll1.enqueue(4);
ll1.dequeue();
ll1.dequeue();
ll1.dequeue();
ll1.dequeue();
ll1.display();
console.log(ll1.getSize());