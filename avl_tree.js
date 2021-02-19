class AVLNode {
    constructor(val) {
        this.val = val;
        this.height = 0;
        this.left = null;
        this.right = null; 
    }
}

const insertAVL = (items, threshold) => {
    if (!items || items.length == 0) {
        return null; 
    }

    let root = new AVLNode(items[0]);

    for ( let i=1; i< items.length; i++) {
        root = insert(root, items[i], threshold);
    }

    return AVvlNodesToTressnode(root);
}

const insert = (node, key, threshold) =>{
    if (!node) {
        return new AVLNode(key);
    }
    if (key < node.val) {
        node.left =  insert(node.left, key, threshold);
    } else {
        node.right =  insert(node.right, key, threshold)
    }

    node.height = 1 + Math.max( getHeight(node.left), getHeight(node.right));

    const balance = getBalance(node);
}

const getHeight = (node) => {
    if (!node) {
        return -1; 
    } 
    return node.height; 
}

