function quicksort(arr) {
  if (arr.length === 1) { // base case,
    return arr;
  }

  const pivot = arr[arr.length-1];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length -1; i++) { //do not loop through to the pivot
    if (arr[i] <= pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i])
    }
  }

  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quicksort(leftArr), pivot, ...quicksort(rightArr)] // ... spreads the results from the result of the split arrays by commas
  } else if (leftArr.length > 0) {
    return [...quicksort(leftArr), pivot]
  } else if (rightArr.length > 0) {
    return [pivot, ...quicksort(rightArr)]
  }


  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Pick the first value as the pivot

  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right

  // Recursively sort the left
  // Recursively sort the right

  // Return the left, pivot and right in sorted order

}


module.exports = [quicksort];
