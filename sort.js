// merge sort

const mergeSortArray = (array) => {
    if ( array.length < 2 ){
        return array;
    }
    const mid = Math.floor( array.length/2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    return merge( leftSorted, rightSorted);
}

const merge = ( left, right) => {
    let results = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while ( leftIndex< left.length && rightIndex < right.length ) {
        if ( left[leftIndex] < right[rightIndex ] ) {
            results.push( left[leftIndex])
            leftIndex++;
        } else {
            results.push( right[rightIndex])
            rightIndex++;
        }
    }

    return results 
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

const mergeSortLinkedList = (head) => {
    if ( head == null || head.next == null ) {
        return head;
    }
    const mid = splitMiddle(head);

    const left =  mergeSortLinkedList(head); 
    const right = mergeSortLinkedList(mid);

    return mergeLinkedList( left, right);
}

const splitMiddle = (head) => {
    let prev = null; 
    let slow = head; 
    let fast = head; 

    while ( fast!= null && fast.next != null) {
        prev = slow; 
        slow = slow.next; 
        fast = fast.next.next; 
    }

    prev.next = null; 
    return slow; 
}

const mergeLinkedList = ( left, right ) => {
    const dummy = new ListNode(0);
    let end = dummy; 

    while(left != null && right != null ) {
        if ( left.val < right.val ) {
            end.next = left; 
            left = left.next; 
        } else {
            end.next = right; 
            right = right.next; 
        }
        
    }
}