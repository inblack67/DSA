class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor (val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

class BinarySearchTree {
    root: TreeNode | null;
    constructor () {
        this.root = null;
    }
    sortedArrayToBST (nums: number[]) {
        const queue: TreeNode[] = [];
        this.root = new TreeNode(nums[ 0 ]);
        queue.push(this.root);
        let i = 1;
        while (queue.length > 0 && i < nums.length) {
            const el = nums[ i ];
            const nextNode = queue.shift();
            if (el <= nextNode!.val) {
                const leftChild = new TreeNode(el);
                nextNode!.left = leftChild;
            } else {
                const rightChild = new TreeNode(el);
                nextNode!.right = rightChild;
            }
            if (nextNode!.left) {
                queue.push(nextNode!.left);
            }
            if (nextNode!.right) {
                queue.push(nextNode!.right);
            }
            i++;
        }
    };
    createBST (nums: number[]) {
        const queue: TreeNode[] = [];
        this.root = new TreeNode(nums[ 0 ]);
        queue.push(this.root);
        let i = 1;
        while (queue.length > 0 && i < nums.length) {
            const el = nums[ i ];
            const nextNode = queue.shift();
            if (el <= nextNode!.val) {
                const leftChild = new TreeNode(el);
                nextNode!.left = leftChild;
            } else {
                const rightChild = new TreeNode(el);
                nextNode!.right = rightChild;
            }
            if (nextNode!.left) {
                queue.push(nextNode!.left);
            }
            if (nextNode!.right) {
                queue.push(nextNode!.right);
            }
            i++;
        }
    };

    preorder (root: TreeNode | null) {
        let curr = root;
        if (curr) {
            console.log(curr.val);
            this.preorder(curr.left);
            this.preorder(curr.right);
        }
    };
    inorder (root: TreeNode | null) {
        let curr = root;
        if (curr) {
            this.inorder(curr.left);
            console.log(curr.val);
            this.inorder(curr.right);
        }
    };
    postorder (root: TreeNode | null) {
        let curr = root;
        if (curr) {
            this.postorder(curr.left);
            this.postorder(curr.right);
            console.log(curr.val);
        }
    };
}

const bst = new BinarySearchTree();
// bst.sortedArrayToBST([ 2, 10, -2, 5, 20, 1, 9, 0 ]);
// bst.sortedArrayToBST([ -10, -3, 0, 5, 9 ]);
bst.createBST([ 10, 2, 3, 20, 0, 1, 3 ]);
bst.preorder(bst.root);