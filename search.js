// find integer square root

const squareRoot = (n) => {
  let low = 1; 
  let high = n; 
  let ans = 0
  while ( low <= high ) {
    let mid = low + Math.floor( (high-low)/2 )
    
    if ( Math.floor( mid*mid) <= n) {
      ans = mid
      low = mid + 1 
    } else {
      high = mid-1
    }
  }
  return ans
}



const search = (matrix, target) => {
  if (matrix.length == 0) {
    return false;
  }

  let col = matrix[0].length - 1;
  let row = 0;

  while (col >= 0 && row <= matrix.length - 1) {
    if (target == matrix[row][col]) {
      return true;
    } else if (target < matrix[row][col]) {
      col--;
    } else if (target > matrix[row][col]) {
      row++;
    }
  }

  return false;
}

// merge Sort Linked List

const mergeSort = (head) => {
  if (head == null || head.next == null) {
    return head; 
  }
  
  const mid = getMiddle(head);
  const left = mergeSort(head);
  const right = mergeSort(mid);
  
  return merge(left, right);
}

const merge = (left, right) => {
  const dummy = new ListNode(0);
  let endOfList = dummy; 
  
  while ( left !== null && right !== null ) {
    if ( left.val < right.val ) {
      endOfList.next = left;
      left = left.next; 
    } else {
      endOfList.next = right;
      right = right.next; 
    }
    endOfList = endOfList.next;
  }
  if ( left !== null ) {
    endOfList.next = left; 
  } 
  if ( right !== null ) {
    endOfList.next = right;
  }
  
  return dummy.next;
} 

const getMiddle = (head) => {
  let prev = null; 
  let slow = head; 
  let fast = head; 
  
  while ( fast !== null && fast.next != null ) {
    prev = slow; 
    fast = fast.next.next; 
    slow = slow.next; 
  }
  
  prev.next = null; 
  return slow;
}