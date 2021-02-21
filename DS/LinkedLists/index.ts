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
    append (el: number) {
        const newNode = new MyNode(el);
        if (!this.head) {
            // first node
            this.head = newNode;
        } else {
            console.log(this.head);
            // this.head.next = newNode;
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
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
}

const ll1 = new MyLinkedList();
ll1.append(1);
ll1.append(2);
ll1.append(3);
ll1.append(4);
ll1.append(5);
ll1.display();