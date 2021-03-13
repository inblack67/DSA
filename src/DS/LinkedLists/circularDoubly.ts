class MyCircularDoublyNode {
    data: number;
    next: MyCircularDoublyNode;
    prev: MyCircularDoublyNode;
    constructor (data: number, next: MyCircularDoublyNode = null, prev: MyCircularDoublyNode = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class MyCircularDoublyLinkedList {
    head: MyCircularDoublyNode;
    size: number;
    constructor () {
        this.head = null;
        this.size = 0;
    }
    append (el: number) {
        const newNode = new MyCircularDoublyNode(el);
        if (!this.head) {
            // first node
            this.head = newNode;
            this.head.prev = this.head;
            this.head.next = this.head;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== this.head) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            newNode.prev = currentNode;
            newNode.next = this.head;
            this.head.prev = newNode;
        }
        this.size++;
    }
    insertAtPosition (el: number, position: number) {
        if (position < 0 || position >= this.size) {
            throw new Error('Invalid Position');
        }

        const newNode = new MyCircularDoublyNode(el);

        if (!this.head) {
            this.head = newNode;
            this.head.prev = this.head;
            this.head.next = this.head;
        }

        if (position === 0) {
            this.insertAtHead(el);
            return;
        }

        let currentPosition = 0;
        let currentNode = this.head;
        let prevNode: MyCircularDoublyNode = null;
        while (currentPosition < position) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            currentPosition++;
        }
        newNode.next = prevNode.next;
        newNode.prev = prevNode;
        prevNode.next = newNode;
        this.size++;
    }
    insertAtHead (el: number) {
        const newNode = new MyCircularDoublyNode(el);
        if (!this.head) {
            this.head = newNode;
            this.head.next = this.head;
            this.head.prev = this.head;
            this.size++;
            return;
        }
        newNode.prev = this.head.prev;
        newNode.next = this.head;
        this.head.prev.next = newNode;
        this.head.prev = newNode;
        this.head = newNode;
        this.size++;
    }
    deleteFirst () {
        if (!this.head) {
            throw new Error('Not Allowed');
        }
        if (!this.head.next) {
            this.head = null;
        } else {
            const lastNode = this.head.prev;
            this.head = this.head.next;
            this.head.prev = lastNode;
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
            let prevNode: MyCircularDoublyNode = null;
            while (currentNode.next !== this.head) {
                prevNode = currentNode;
                currentNode = currentNode.next;
            }
            prevNode.next = this.head;
            this.head.prev = prevNode;
        }
        this.size--;
    }
    deleteFormPosition (position: number) {
        if (position < 0 || position >= this.size) {
            throw new Error('Invalid Position');
        }
        if (position === 0) {
            this.deleteFirst();
            return;
        }

        let currentPosition = 0;
        let currentNode = this.head;
        let prevNode: MyCircularDoublyNode = null;
        while (currentPosition < position) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            currentPosition++;
        }
        prevNode.next = currentNode.next;
        if (currentNode.next) {
            currentNode.next.prev = prevNode;
        }
        this.size--;
    }
    display () {
        if (!this.head) {
            console.log(this.head);
        }
        else {
            let currentNode = this.head;
            do {
                console.log(currentNode.data);
                currentNode = currentNode.next;
            } while (currentNode !== this.head);
        }
    }
    getSize () {
        return this.size;
    }
}

const cll1 = new MyCircularDoublyLinkedList();
cll1.append(1);
cll1.append(2);
cll1.append(3);
cll1.append(4);
cll1.append(5);
cll1.insertAtHead(6);
cll1.insertAtHead(7);
cll1.append(9);
cll1.append(10);
cll1.append(11);
cll1.deleteFirst();
cll1.deleteLast();
cll1.deleteLast();
cll1.insertAtHead(8);
cll1.insertAtPosition(12, 0);
cll1.deleteFormPosition(0);
cll1.display();
console.log(cll1.getSize());