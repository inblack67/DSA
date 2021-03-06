class MyDoublyNode {
    data: number;
    next: null | MyDoublyNode;
    prev: null | MyDoublyNode;
    constructor (data: number, next: null | MyDoublyNode = null, prev: null | MyDoublyNode = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class MyDoublyLinkedList {
    head: null | MyDoublyNode;
    size: number;
    constructor () {
        this.head = null;
        this.size = 0;
    }
    append (el: number) {
        const newNode = new MyDoublyNode(el);
        if (!this.head) {
            // first node
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            newNode.prev = currentNode;
        }
        this.size++;
    }
    insertAtPosition (el: number, position: number) {
        if (position < 0 || position >= this.size) {
            throw new Error('Invalid Position');
        }

        const newNode = new MyDoublyNode(el);
        let currentPosition = 0;
        let currentNode = this.head;
        let prevNode: null | MyDoublyNode = null;
        while (currentPosition < position) {
            prevNode = currentNode;
            currentNode = currentNode!.next;
            currentPosition++;
        }
        newNode.next = prevNode!.next;
        newNode.prev = prevNode;
        prevNode!.next = newNode;
        this.size++;
    }
    insertAtHead (el: number) {
        const newNode = new MyDoublyNode(el);
        if (!this.head) {
            // first node
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    deleteFirst () {
        if (!this.head) {
            throw new Error('Not Allowed');
        }
        if (!this.head.next) {
            this.head = null;
        } else {
            this.head = this.head.next;
        }
        this.size--;
    }
    deleteLast () {
        if (!this.head) {
            throw new Error('Not Allowed');
        }
        if (!this.head.next) {
            this.head = null;
        } else {
            let currentNode = this.head;
            let prevNode: null | MyDoublyNode = null;
            while (currentNode.next) {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            prevNode!.next = null;
        }
        this.size--;
    }
    deleteFormPosition (position: number) {
        if (position < 0 || position >= this.size) {
            throw new Error('Invalid Position');
        }

        let currentPosition = 0;
        let currentNode = this.head;
        let prevNode: null | MyDoublyNode = null;
        while (currentPosition < position) {
            prevNode = currentNode;
            currentNode = currentNode!.next;
            currentPosition++;
        }
        prevNode!.next = currentNode!.next;
        if (currentNode!.next) {
            currentNode!.next.prev = prevNode;
        }
        // delete currentNode.next;
        this.size--;
    }
    display () {
        if (!this.head) {
            console.log(this.head);
        }
        else {
            let currentNode: MyDoublyNode | null = this.head;
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

const ll1 = new MyDoublyLinkedList();
ll1.append(1);
ll1.append(2);
ll1.append(3);
ll1.append(4);
ll1.append(5);
ll1.insertAtHead(6);
ll1.insertAtHead(7);
ll1.insertAtHead(8);
ll1.append(9);
ll1.append(10);
ll1.append(11);
ll1.insertAtPosition(99, 10);
ll1.deleteFirst();
ll1.deleteLast();
ll1.deleteFormPosition(9);
ll1.display();
console.log(ll1.getSize());