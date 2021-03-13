class MyStackNode {
    data: number;
    next: MyStackNode | null;
    constructor (data: number, next: MyStackNode | null = null) {
        this.data = data;
        this.next = next;
    }
}

class MyStackLinkedList {
    head: MyStackNode | null;
    size: number;
    constructor () {
        this.head = null;
        this.size = 0;
    }
    push (el: number) {
        const newNode = new MyStackNode(el);
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
            let prevNode: MyStackNode | null = null;
            while (currentNode.next) {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            prevNode!.next = null;
        }
        this.size--;
    }
    display () {
        if (!this.head) {
            console.log(this.head);
        }
        else {
            let currentNode: MyStackNode | null = this.head;
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

const msll = new MyStackLinkedList();
msll.push(1);
msll.push(2);
msll.push(3);
msll.push(4);
msll.pop();
msll.display();
console.log(ll1.getSize());