// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) { // recursive function that divides array into 2;
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length/2); // finds the middle index of the arr
  const arrA = arr.slice(0, middleIndex); //splits the array in half over and over
  const arrB = arr.slice(middleIndex);

  return merge(mergeSort(arrA), mergeSort(arrB));


  // Check if the input is length 1 or less
    // If so, it's already sorted: return

  // Divide the array in half

  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < arrA.length && rightIndex < arrB.length) {
    const leftEl = leftArr[leftIndex];
    const rightEl = rightArr[rightIndex];

    if (leftEl < rightEl) {
      output.push(leftEl)
      leftIndex++
    } else {
      output.push(rightEl);
      rightIndex++
    }
  }

  return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
  // Create an empty return array

  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array

}

module.exports = [merge, mergeSort];




// [1,4,2,8,345,123]

// [1,4,2,8]  [345,123]

// [1,4] [2,8]  [345] [123]

// [1] [4] [2] [8] [345] [123]


// [1,4]  [2,8] [123,345]

// [1,2,4,8] [123,345]

// [1,2,4,8,123,345]
