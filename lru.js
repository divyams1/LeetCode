class ListNode {
    constructor(key, val, next=null, prev=null) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class LRU {
    constructor(limit=10) {
        this.size = 0;
        this.limit = limit; 
        this.head = null;
        this.tail = null;
        this.cache = {};
    }

    removeFromList(node) {
        savedPrev = node.prev;
        savedNext = node.next; 

        savedPrev.next = savedNext;
        savedNext.prev = savedPrev;
    }

    moveToHead(node) {
        this.removeFromList(node);
    }

    addToFront(node) {
        node.prev = head; 
        node.next = head.next;
    }

    get(key) {
        node = this.cache[key];

        if ( node == null ) {
            return null; 
        }

        this.moveToHead(node);
        return node.val
    }

    put(key, value) {
        node = this.cache[key];

        if ( node == null  ) {
            let newNode = new ListNode(key, value);
            this.cache[key] = value; 
            this.addToFront(newNode);
            this.size++;
        }

        if ( this.size > this.limit) {
            this.removeLRUEntry();
        } else {
            node.value = value; 
            this.moveToHead(node);
        }
    }

    removeLRUEntry() {

    }

    popTail() {
        
    }
}