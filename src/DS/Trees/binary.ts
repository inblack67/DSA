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
    async create (arr: number[]) {
        const root = new MyBTNode(arr[ 0 ]);
        this.root = root;
        this.queue.push(root);
        let i = 1;
        while (this.queue.length > 0 && i < arr.length) {
            const someNode = this.queue.shift();
            const leftChild = arr[ i++ ];
            if (leftChild !== undefined) {
                const left = new MyBTNode(leftChild);
                someNode!.left = left;
                this.queue.push(left);
            }
            const rightChild = arr[ i++ ];
            if (rightChild !== undefined) {
                const right = new MyBTNode(rightChild);
                someNode!.right = right;
                this.queue.push(right);
            }
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
    iterativePreorder (node1: MyBTNode | null) {
        const stack: MyBTNode[] = [];
        let currentNode = node1;
        while (currentNode || stack.length > 0) {
            if (currentNode) {
                console.log(currentNode.data);
                stack.push(currentNode);
                currentNode = currentNode.left;
            } else {
                const prevNode = stack.pop();
                currentNode = prevNode!.right;
            }
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
    iterativeInorder (node1: MyBTNode | null) {
        const stack: MyBTNode[] = [];
        let currentNode = node1;
        while (currentNode || stack.length > 0) {
            if (currentNode) {
                stack.push(currentNode);
                currentNode = currentNode.left;
            } else {
                const prevNode = stack.pop();
                console.log(prevNode!.data);
                currentNode = prevNode!.right;
            }
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
    iterativePostorder (node1: MyBTNode | null) {
        const stack: MyBTNode[] = [];
        let currentNode = node1;
        let count = 0;
        while (currentNode || stack.length > 0) {
            if (currentNode) {
                stack.push(currentNode);
                currentNode = currentNode.left;
            } else {
                const prevNode = stack.pop();
                if (count === 0) {
                    stack.push(prevNode!);
                    count++;
                } else {
                    console.log(prevNode!.data);
                    currentNode = prevNode!.right;
                }
            }
        }
    }
    levelOrder (node1: MyBTNode | null) {
        const queue: (MyBTNode | null)[] = [];
        console.log(node1?.data);
        queue.push(node1);
        while (queue.length > 0) {
            const popped = queue.shift();
            if (popped?.left) {
                console.log(popped.left.data);
                queue.push(popped.left);
            }
            if (popped?.right) {
                console.log(popped.right.data);
                queue.push(popped.right);
            }
        }
    }
}

const bt = new BinaryTree();
bt.create([ 1, 2, 3, 4, 5, 6 ]);
bt.levelOrder(bt.root);
bt.preOrder(bt.root);
bt.iterativePreorder(bt.root);
bt.inOrder(bt.root);
bt.iterativeInorder(bt.root);
bt.postOrder(bt.root);
bt.iterativePostorder(bt.root);