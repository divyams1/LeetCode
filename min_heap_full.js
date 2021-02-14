class MinHeap {
    constructor() {
        this.heap = [ null]; 
    }

    getMin() {
        return this.heap[1];
    }

    getSize() {
        return this.heap.length - 1
    }

    insert(node) {
        this.heap.push(node);

        if ( this.heap.length >  1) {
            let current = this.heap.length - 1; 
            // the current node we pushed in
            while ( current > 1 && this.heap[Math.floor(current/2)] > this.heap[current] ) {
               [this.heap[Math.floor(current/2)], this.heap[current]] = [ this.heap[current], this.heap[Math.floor(current/2)]]
                current = Math.floor(current/2)
            }
        }
    }

    remove(node) {
        let smallest = this.heap[1];
        if ( this.heap.length > 2) {
            this.heap[1] = this.heap[ this.heap.length-1];
            this.heap.splice( this.heap.length-1);

            if ( this.heap.length === 3 ) {
                if ( this.heap[1] > this.heap[2] ) {
                    let temp = this.heap[1];
                    this.heap[1] = this.heap[2];
                    this.heap[2] = temp; 
                }
                return smallest; 
            }

            let current = 1; 
            let leftChild = current * 2 ;
            let rightChild = current * 2 + 1;

            while ( this.heap[leftChild] && this.heap[rightChild] && this.heap[current] > this.heap[leftChild] || this.heap[current] > this.heap[rightChild] ) {
                if ( this.heap[leftChild] < this.heap[rightChild]  ) {
                    let temp = this.heap[current];
                    this.heap[current] = this.heap[leftChild];
                    this.heap[leftChild] = temp; 
                    current = leftChild
                } else { 
                     [this.heap[current], this.heap[rightChild]] = [this.heap[rightChild], this.heap[current]]
                     current = rightChild
                }
                leftChild = current * 2; 
                rightChild = current * 2 + 1;
            }

        } else if ( this.heap.length === 2) {
            this.heap.splice(1,1)
        } else {
            return null
        }
        return smallest;
    }
}

let heap = new MinHeap();
heap.insert(5)
heap.insert(1)
heap.insert(2)
heap.insert(3)

console.log(heap)