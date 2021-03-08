class TreeNode {
    constructor(val) {
        this.val = val; 
        this.left = null; 
        this.right = null; 
    }
}

const inOrder = (node, val) =>{ 
    if (!node) {
        return -1 
    }
    if ( node.val === val) {
        return node; 
    }
    return inOrder(node.left, val) || inOrder(node.right, val);
}

const BFS = (node) => {
    let visited = [];
    let queue = []; 
    let current = node; 
    queue.push(node);

    while (queue.length) {
        current = queue.shift();
        visited.push(current.val);
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    };
    return visited; 
}

const DFS = (node) => {
    let visited = []
    let current = node; 
    let traverse = node => {
        visited.push(node.val);
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
    }
    traverse(current);
    return visited;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
node2.left = node1;
node2.right = node3;
node3.right = node4;
console.log( DFS(node1))
