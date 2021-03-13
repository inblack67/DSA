class MyNode {
    data: number;
    left: MyNode;
    right: MyNode;
    constructor (data: number, left: MyNode = null, right: MyNode = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    queue: MyNode[];
    root: MyNode;
    constructor () {
        this.queue = [];
        this.root = null;
    }
    create () {
        let j = 0;
        const root = new MyNode(1);
        this.root = root;
        this.queue.push(root);
        while (this.queue.length > 0) {
            if (j === 3) {
                break;
            }
            const someNode = this.queue.shift();
            const leftChild = new MyNode(2);
            const rightChild = new MyNode(3);
            someNode.left = leftChild;
            someNode.right = rightChild;
            this.queue.push(leftChild);
            this.queue.push(rightChild);
            j++;
        }
    }
    preOrder (node1: MyNode) {
        let currentNode = node1;
        if (currentNode) {
            console.log(currentNode.data);
            this.preOrder(currentNode.left);
            this.preOrder(currentNode.right);
        }
    }
    inOrder (node1: MyNode) {
        let currentNode = node1;
        if (currentNode) {
            this.inOrder(currentNode.left);
            console.log(currentNode.data);
            this.inOrder(currentNode.right);
        }
    }
    postOrder (node1: MyNode) {
        let currentNode = node1;
        if (currentNode) {
            this.postOrder(currentNode.left);
            this.postOrder(currentNode.right);
            console.log(currentNode.data);
        }
    }
}

const bt = new BinaryTree();
bt.create();
bt.preOrder(bt.root);
bt.inOrder(bt.root);
bt.postOrder(bt.root);