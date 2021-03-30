class MaxHeap: 
    def __init__(self):
        self.heap = []
         
    def getParent(self, i):
        return int( (i-1)/2)

    def leftChild(self, i):
        return (2*i) + 1 

    def rightChild(self, i):
        return(2*i) + 2
    
    def hasParent(self, i):
        return self.getParent(i) < len(self.heap)
    
    def hasLeftChild(self, i):
        return self.leftChild(i) < len(self.heap)

    def hasRightChild(self, i):
        return self.rightChild(i) < len(self.heap)
    
    def insert(self, key):
        self.heap.append(key)
        self.heapify( len(self.heap)-1)

    def getMax(self):
        return self.heap[0]

    def heapify(self, i):
        while (self.hasParent(i)) and self.heap[i] > self.heap[self.getParent(i)]:
            self.heap[i], self.heap[self.getParent(i)] = self.heap[self.getParent(i)], self.heap[i]
            i = self.getParent(i)

