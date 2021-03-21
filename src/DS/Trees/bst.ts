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
    createBST (arr: number[]) {
        for (let i = 0; i < arr.length; i++) {
            const el = arr[ i ];
            const newNode = new TreeNode(el);
            if (!this.root) {
                this.root = newNode;
            } else {
                let curr: TreeNode | null = this.root;
                let prev: TreeNode;
                while (curr) {
                    prev = curr;
                    if (curr.val === el) {
                        throw new Error('No duplicates allowed');
                    }
                    if (el <= curr.val) {
                        curr = curr.left;
                    } else {
                        curr = curr.right;
                    }
                }
                if (el <= prev!.val) {
                    prev!.left = newNode;
                } else {
                    prev!.right = newNode;
                }
            }
        }
    }
    sortedArrayToBST (arr: number[]) {
        for (let i = 0; i < arr.length; i++) {
            const el = arr[ i ];
            const newNode = new TreeNode(el);
            if (!this.root) {
                this.root = newNode;
            } else {
                let curr: TreeNode | null = this.root;
                let prev: TreeNode;
                while (curr) {
                    prev = curr;
                    if (el <= curr.val) {
                        curr = curr.left;
                    } else {
                        curr = curr.right;
                    }
                }
                if (el <= prev!.val) {
                    prev!.left = newNode;
                } else {
                    prev!.right = newNode;
                }
            }
        }
    }
    searchNode (key: number, root: TreeNode | null): TreeNode | null {
        if (!root) {
            return null;
        }
        if (key === root.val) {
            return root;
        }
        if (key < root.val) {
            return this.searchNode(key, root.left);
        } else {
            return this.searchNode(key, root.right);
        }
    }
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
bst.sortedArrayToBST([ -10, -3, 0, 5, 9 ]);
console.log(bst.searchNode(9, bst.root));
// bst.createBST([ 9, 15, 5, 20, 16, 8, 12, 3, 6 ]);
bst.preorder(bst.root);