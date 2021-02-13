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

