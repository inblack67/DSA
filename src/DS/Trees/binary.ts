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
    create (arr: number[]) {
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
    createFromString (str: string) {
        if (!str) { return; }

        console.log(str);

        const stack: string[] = [];
        let lstIndex = 0;
        let rstIndex = 0;
        let visited = 0;

        for (let i = 0; i < str.length; i++) {
            const el = str[ i ];
            if (el === '(') {
                stack.push(el);
            } else if (el === ')') {
                stack.pop();
                if (stack.length === 0) {
                    console.log(i);
                    if (visited === 0) {
                        lstIndex = i;
                        visited++;
                    } else {
                        rstIndex = i;
                    }
                }
            }
        }

        const lst = str.slice(str.indexOf('('), lstIndex + 1);
        const rst = str.slice(lstIndex + 1, rstIndex + 1);
        const rootCandidate = str.match(/-?[0-9]/);
        const rootData = rootCandidate![ 0 ];
        const root = new MyBTNode(+rootData);
        this.root = root;
        this.queue.push(root);
        const lstData = lst.match(/[0-9]/gi);
        const rstData = rst.match(/[0-9]/gi);
        let i = 0;
        let j = 0;
        while (this.queue.length > 0) {
            const someNode = this.queue.shift();
            if (lstData) {
                const el = lstData[ i++ ];
                if (el) {
                    const newNode = new MyBTNode(+el);
                    someNode!.left = newNode;
                    this.queue.push(newNode);
                }
            }
            if (rstData) {
                const el = rstData[ j++ ];
                if (el) {
                    const newNode = new MyBTNode(+el);
                    someNode!.right = newNode;
                    this.queue.push(newNode);
                }
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
    countNodes (node1: MyBTNode | null): number {
        let curr = node1;
        if (curr) {
            // left => right => print => postorder
            return this.countNodes(curr.left) + this.countNodes(curr.right) + 1;
        }
        return 0;
    }
    sumOfAllNodes (node1: MyBTNode | null): number {
        let curr = node1;
        if (curr) {
            return this.countNodes(curr.left) + this.countNodes(curr.right) + curr.data;
        }
        return 0;
    }
    countNodesWithTwoChildren (node1: MyBTNode | null): number {
        let curr = node1;
        if (curr) {
            const leftCall = this.countNodesWithTwoChildren(curr.left);
            const rightCall = this.countNodesWithTwoChildren(curr.right);
            if (curr.left && curr.right) {
                return leftCall + rightCall + 1;
            } else {
                return leftCall + rightCall;
            }
        }
        return 0;
    }
    countNodesWithDegreeOne (node1: MyBTNode | null): number {
        let curr = node1;
        if (curr) {
            const leftCall = this.countNodesWithTwoChildren(curr.left);
            const rightCall = this.countNodesWithTwoChildren(curr.right);
            if (curr.left || curr.right) {
                return leftCall + rightCall + 1;
            } else {
                return leftCall + rightCall;
            }
        }
        return 0;
    }
    countLeafNodes (node1: MyBTNode | null): number {
        let curr = node1;
        if (curr) {
            const leftCall = this.countNodesWithTwoChildren(curr.left);
            const rightCall = this.countNodesWithTwoChildren(curr.right);
            if (!curr.left && !curr.right) {
                return leftCall + rightCall + 1;
            } else {
                return leftCall + rightCall;
            }
        }
        return 0;
    }
    getHeight (node1: MyBTNode | null): number {
        let curr = node1;
        if (curr) {
            const leftCall = this.getHeight(curr.left);
            const rightCall = this.getHeight(curr.right);
            if (leftCall > rightCall) {
                return leftCall + 1;
            } else {
                return rightCall + 1;
            }
        }
        return 0;
    }
    invertMe () {
        if (!this.root) {
            return;
        }
        const queue: MyBTNode[] = [];
        queue.push(this.root);
        while (queue.length > 0) {
            const myNode = queue.shift();
            if (myNode) {
                const temp = myNode.left;
                myNode.left = myNode.right;
                myNode.right = temp;
                if (myNode.left) {
                    queue.push(myNode.left);
                }
                if (myNode.right) {
                    queue.push(myNode.right);
                }
            }
        }
    }
}

const bt = new BinaryTree();
bt.create([ 1, 2, 3, 4, 5, 6 ]);
bt.invertMe();
// bt.levelOrder(bt.root);
bt.preOrder(bt.root);
// bt.iterativePreorder(bt.root);
// bt.inOrder(bt.root);
// bt.iterativeInorder(bt.root);
// bt.postOrder(bt.root);
// bt.iterativePostorder(bt.root);
// console.log(bt.countNodes(bt.root));
// console.log(bt.countNodesWithTwoChildren(bt.root));
// console.log(bt.countLeafNodes(bt.root));
// console.log(bt.sumOfAllNodes(bt.root));
// console.log(bt.getHeight(bt.root));
// bt.createFromString('-4(2(3)(1))(6(5))');
// bt.preOrder(bt.root);
// bt.createFromString('1(-1)');