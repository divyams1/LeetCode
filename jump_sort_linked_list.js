class ListNodeJump {
    constructor(val) {
        this.val = val;
        this.next = null; 
        this.jump = null;
    }
}

const setJumpOrder = (head) => {
    let order = 0;
    return jumpOrderHelper( head, order);
}

const jumpOrderHelper = (head, order) => {
    if (head === null || head.val !== -1) {
        return; 
    }
    head.val = order;
    order += 1;
    setJumpOrderHelper( node.jump, order);
    setJumpOrderHelper( node.next, order);
}