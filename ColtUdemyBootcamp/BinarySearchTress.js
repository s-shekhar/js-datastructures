class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
        return this;
    }


    insert(val) { //INSERT VALUE IN BST ITERATIVE
        if (val === null) return null;
        let node = new Node(val);
        if (this.root === null) {
            this.root = node;
        }
        else {
            let temp = this.root;
            while (temp !== null) {
                if (val < temp.data) { //Need to insert in left 
                    if (temp.left === null) {
                        temp.left = node;
                        console.log("Inserted to the Left of ", temp.data)
                        break;
                    }
                    temp = temp.left;
                }
                else {
                    if (temp.right === null) {
                        temp.right = node;
                        console.log("Inserted to the Right of ", temp.data)
                        break;
                    }
                    temp = temp.right;
                }
            }
        }
    }

    find(val, root) { //FIND VALUE IN BST (RECURSION)
        console.log(root.data, val)
        if (root.data === val) return true;
        else if (val < root.data) {
            if (!root.left) return false;
            else return this.find(val, root.left)
        }
        else {
            if (!root.right) return false;
            else return this.find(val, root.right)
        }
    }

    bfs() {
        let resArr = [];
        let queue = [];
        queue.push(this.root);
        while (queue.length !== 0) {
            let node = queue.shift();
            resArr.push(node.data);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return resArr;
    }

    preorder() {
        traverse(this.root)
        function traverse(node) {
            if (node) {
                console.log(node.data)
                if (node.left) {
                    traverse(node.left)
                }
                if (node.right) {
                    traverse(node.right)
                }
            }
        }
    }
    
    inorder() {
        traverse(this.root)
        function traverse(node) {
            if (node) {
                if (node.left) {
                    traverse(node.left)
                }
                console.log(node.data)
                if (node.right) {
                    traverse(node.right)
                }
            }
        }
    }

    postorder() {
        traverse(this.root)
        function traverse(node) {
            if (node) {
                if (node.left) {
                    traverse(node.left)
                }
                if (node.right) {
                    traverse(node.right)
                }
                console.log(node.data)
            }
        }
    }
}


bst = new BST;

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);


// console.log(bst.find(4, bst.root))

console.log(bst.bfs())

// bst.preorder();

bst.inorder();

// bst.postowrder();