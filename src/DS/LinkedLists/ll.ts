class MyNode {
    data: number;
    next: null | MyNode;
    constructor (data: number, next: null | MyNode = null) {
        this.data = data;
        this.next = next;
    }
}

class MyLinkedList {
    head: null | MyNode;
    size: number;
    constructor () {
        this.head = null;
        this.size = 0;
    }
    append (el: number) {
        const newNode = new MyNode(el);
        if (!this.head) {
            // first node
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
    insertAtPosition (el: number, position: number) {
        if (position < 0 || position >= this.size) {
            throw new Error('Invalid Position');
        }

        const newNode = new MyNode(el);
        let currentPosition = 0;
        let currentNode = this.head;
        let prevNode: null | MyNode = null;
        while (currentPosition < position) {
            prevNode = currentNode;
            currentNode = currentNode!.next;
            currentPosition++;
        }
        newNode.next = prevNode!.next;
        prevNode!.next = newNode;
        this.size++;
    }
    insertAtHead (el: number) {
        const newNode = new MyNode(el);
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
            let prevNode: null | MyNode = null;
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
        let prevNode: null | MyNode = null;
        while (currentPosition < position) {
            prevNode = currentNode;
            currentNode = currentNode!.next;
            currentPosition++;
        }
        prevNode!.next = currentNode!.next;
        // delete currentNode.next;
        this.size--;
    }
    display () {
        if (!this.head) {
            console.log(this.head);
        }
        else {
            let currentNode: MyNode | null = this.head;
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

const mll = new MyLinkedList();
mll.append(1);
mll.append(2);
mll.append(3);
mll.append(4);
mll.append(5);
mll.insertAtHead(6);
mll.insertAtHead(7);
mll.insertAtHead(8);
mll.append(9);
mll.append(10);
mll.append(11);
mll.insertAtPosition(99, 10);
mll.deleteFirst();
mll.deleteLast();
mll.deleteFormPosition(9);
mll.display();
console.log(mll.getSize());