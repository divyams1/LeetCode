const mergeSort = (array) => {
    if ( array.length <= 1 ) {
        return array;
    }
    let left = 0;
    let right = array.length;
    let mid = left +  Math.floor((right-left)/2)
   
    const leftArray = array.slice(0,mid);
    const rightArray = array.slice(mid);
    const leftSorted = mergeSort(leftArray);
    const rightSorted = mergeSort(rightArray);
    return merge( leftSorted, rightSorted);
}

const merge = (left, right) => {
    
    let array = [];
    let leftCounter = 0;
    let rightCounter = 0; 
    while (leftCounter < left.length && rightCounter < right.length ) {
        if ( left[leftCounter] < right[rightCounter] ) {
            array.push(left[leftCounter])
            leftCounter++; 
        } else {
            array.push(right[rightCounter])
            rightCounter++;
        }
    }
    array = array.concat(left.slice(leftCounter)).concat(right.slice(rightCounter));
    return array;
}

console.log(mergeSort([2,5,1,4,10,8]))