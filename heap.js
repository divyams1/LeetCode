class MinHeap {
    constructor() {
        this.heap = [null]
    }

    getMin() {
        return this.heap[1]
    }

    insert(node) {
        this.heap.push(node);

        if ( this.heap.length > 1)  {
            let current = this.heap.length - 1; 
            while ( current > 1 && this.heap[Math.floor(current/2)] > this.heap[current]) {
                [this.heap[Math.floor(current/2)], this.heap[current]] = [ this.heap[current], this.heap[Math.floor(current/2)]]
                current = Math.floor(current/2)
            }
        }
    }

    remove(node) {
        let smallest = this.heap[1];
    }
}