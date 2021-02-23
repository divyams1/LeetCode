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

    if ( balance > threshold) {
        if (getBalance(node.left) >= 0 ) {
            node = rotateRight(node)
        } else {
            node = rotateLeftRight(node)
        }
    } else if ( balance <= -threshold) {
        if (getBalance(node.right) <= 0) {
            node = rotateLeft(node);
        } else {
            node = rotatRightLeft(node);
        }
    }
    return node; 
}

const getHeight = (node) => {
    if (!node) {
        return -1; 
    } 
    return node.height; 
}

const getBalance = node => {
    if (!node) {
        return 0;
    }

    return getHeight(node.left) -  getHeight(node.right);
}


const rotateRight = node => {
    let leftTemp = node.left; 
    node.left = leftTemp.rigth; 
    leftTemp.right = node; 

    node.height = 1+ Math.max(
        getHeight(node.left),
        getHeight(node.right)
    )
    leftTemp.height = 1 + Math.max(
        getHeight(leftTemp.right),
        getHeight(leftTemp.left)
    )

    return leftTemp
}

const rotateLeft = node => {
    let rightTemp = node.right; 
    node.right = rightTemp.left;
    rightTemp.left = node;
    node.height = 1+ Math.max(
        getHeight(node.left),
        getHeight(node.right)
    )
    rightTemp.height = 1 + Math.max(
        getHeight(rightTemp.left),
        getHeight(rightTemp.right)
    )
    return rightTemp;
}

const rotateLeftRight = node => {
    node.left = rotateLeft(node.right);
    return rotateRight(node);
}

const rotateRightLeft = node => {
    node.right = rotateRight(node.left)
    return rotateLeft(node)
}

const convertAviNodesToTreeNode = (avlNode) => {
    if (!avlnode) {
        return null; 
    }
    const root = new TreeNode(avlNode.val);
    root.left = convertAviNodesToTreeNode(avlNode.left);
    root.right = convertAviNodesToTreeNode(avlNode.right);
    return root;
}

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right =null;
    }
}