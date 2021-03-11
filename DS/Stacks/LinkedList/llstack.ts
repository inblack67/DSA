class MyNode {
    data: number;
    next: MyNode;
    constructor (data: number, next: MyNode = null) {
        this.data = data;
        this.next = next;
    }
}

class MyLinkedList {
    head: MyNode;
    size: number;
    constructor () {
        this.head = null;
        this.size = 0;
    }
    push (el: number) {
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

    pop () {
        if (!this.head) {
            throw new Error('Stack Underflow');
        }
        if (!this.head.next) {
            this.head = null;
        } else {
            let currentNode = this.head;
            let prevNode: MyNode = null;
            while (currentNode.next) {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            prevNode.next = null;
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

const ll1 = new MyLinkedList();
ll1.push(1);
ll1.push(2);
ll1.push(3);
ll1.push(4);
ll1.pop();
ll1.display();
console.log(ll1.getSize());