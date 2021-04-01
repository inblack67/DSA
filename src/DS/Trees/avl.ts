class AVLTreeNode {
    val: number;
    height: number;
    left: AVLTreeNode | null;
    right: AVLTreeNode | null;
    constructor (val?: number, height: number = 0, left?: AVLTreeNode | null, right?: AVLTreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
        this.height = height;
    }
}

class AVLTree {
    root: AVLTreeNode | null;
    constructor () {
        this.root = null;
    }
    getNodeHeight (myNode: AVLTreeNode | null) {
        const lstHeight = myNode && myNode.left ? myNode.height : 0;
        const rstHeight = myNode && myNode.right ? myNode.height : 0;
        const maxHeight = Math.max(lstHeight, rstHeight);
        return maxHeight + 1;
    }
    getBalanceFactor (myNode: AVLTreeNode | null) {
        const lstHeight = myNode && myNode.left ? myNode.height : 0;
        const rstHeight = myNode && myNode.right ? myNode.height : 0;
        return lstHeight - rstHeight;
    }
    llRotation (myNode: AVLTreeNode | null) {
        if (!myNode) {
            return;
        }
        const leftChild = myNode.left;
        const rightChild = myNode.right;
        leftChild!.right = myNode;
        myNode.left = rightChild;
        myNode.height = this.getNodeHeight(myNode);
        leftChild!.height = this.getNodeHeight(leftChild);
        if (this.root === myNode) {
            this.root = leftChild;
        }
        return leftChild;
    }
    rrRotation (myNode: AVLTreeNode | null) {
        return null;
    }
    lrRotation (myNode: AVLTreeNode | null) {
        return null;
    }
    rlRotation (myNode: AVLTreeNode | null) {
        return null;

    }
    insert (myRoot: AVLTreeNode | null, el: number) {
        if (!myRoot) {
            const newNode = new AVLTreeNode(el, 1);
            this.root = newNode;
            return myRoot;
        }
        if (el < myRoot.val) {
            myRoot.left = this.insert(myRoot.left, el);
        } else if (el > myRoot.val) {
            myRoot.right = this.insert(myRoot.right, el);
        }
        myRoot.height = this.getNodeHeight(myRoot);
        const balanceFactor = this.getBalanceFactor(myRoot);
        if (balanceFactor === 2 && this.getBalanceFactor(myRoot.left) === 1) {
            // heavy on left left
            return this.llRotation(myRoot);
        } else if (balanceFactor === 2 && this.getBalanceFactor(myRoot.left) === -1) {
            return this.lrRotation(myRoot);
        } else if (balanceFactor === -2 && this.getBalanceFactor(myRoot.left) === 1) {
            return this.rlRotation(myRoot);
        } else if (balanceFactor === -2 && this.getBalanceFactor(myRoot.left) === -1) {
            return this.rrRotation(myRoot);
        }
        return myRoot;
    }
    preorder (root: AVLTreeNode | null) {
        let curr = root;
        if (curr) {
            console.log(curr.val);
            this.preorder(curr.left);
            this.preorder(curr.right);
        }
    };
    inorder (root: AVLTreeNode | null) {
        let curr = root;
        if (curr) {
            this.inorder(curr.left);
            console.log(curr.val);
            this.inorder(curr.right);
        }
    };
    postorder (root: AVLTreeNode | null) {
        let curr = root;
        if (curr) {
            this.postorder(curr.left);
            this.postorder(curr.right);
            console.log(curr.val);
        }
    };
}

const avl = new AVLTree();
avl.insert(avl.root, 1);
avl.insert(avl.root, 2);
avl.insert(avl.root, 3);
avl.insert(avl.root, 4);
avl.preorder(avl.root);