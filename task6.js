class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insertNode(val) {
        var node = {
            data: val,
            left: null,
            right: null
        };

        var currentNode;

        if (!this.root) {
            this.root = node;
        } else {
            currentNode = this.root;
            while (currentNode) {
                if (val < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (val > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    console.log('Ignoring this value as the BST supposed to be a tree containing UNIQUE values');
                    break;
                }
            }
        }
    }
}

BinarySearchTree.prototype.preOrderTraversal = function (root) {
    console.log(root.data);

    if (root.left) {
        this.preOrderTraversal(root.left);
    }
    if (root.right) {
        this.preOrderTraversal(root.right);
    }
};

var BST = new BinarySearchTree();

BST.insertNode(8);
BST.insertNode(3);
BST.insertNode(10);
BST.insertNode(1);
BST.insertNode(6);
BST.insertNode(14);
BST.insertNode(4);
BST.insertNode(7);
BST.insertNode(13);

module.exports = {'BinarySearchTree': BinarySearchTree};