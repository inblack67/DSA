class MyBTNode {
    data: number;
    left: MyBTNode | null;
    right: MyBTNode | null;
    constructor (data: number, left: MyBTNode | null = null, right: null | MyBTNode = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    queue: MyBTNode[];
    root: MyBTNode | null;
    constructor () {
        this.queue = [];
        this.root = null;
    }
    create () {
        let j = 0;
        const root = new MyBTNode(1);
        this.root = root;
        this.queue.push(root);
        while (this.queue.length > 0) {
            if (j === 3) {
                break;
            }
            const someNode = this.queue.shift();
            const leftChild = new MyBTNode(2);
            const rightChild = new MyBTNode(3);
            someNode!.left = leftChild;
            someNode!.right = rightChild;
            this.queue.push(leftChild);
            this.queue.push(rightChild);
            j++;
        }
    }
    preOrder (node1: MyBTNode | null) {
        let currentNode = node1;
        if (currentNode) {
            console.log(currentNode.data);
            this.preOrder(currentNode.left);
            this.preOrder(currentNode.right);
        }
    }
    inOrder (node1: MyBTNode | null) {
        let currentNode = node1;
        if (currentNode) {
            this.inOrder(currentNode.left);
            console.log(currentNode.data);
            this.inOrder(currentNode.right);
        }
    }
    postOrder (node1: MyBTNode | null) {
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