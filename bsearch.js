const bsearch = ( array, num) => {
    let left = 0;
    let right = array.length-1;

    while (left <= right ) {
        mid = (left + Math.floor( (left+right/2) ))
        if ( array[mid] === num ) {
            return true 
        } else if ( array[mid] > num ) {
             right = mid-1; 
        } else {
            left = mid+1; 
            
        }
    }
    return false;
}

console.log( bsearch([1,2,3,4,5], 5))