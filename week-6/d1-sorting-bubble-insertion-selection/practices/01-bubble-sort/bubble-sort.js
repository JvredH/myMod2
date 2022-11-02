
function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    // Iterate through the array
    for (let i = 0; i < arr.length -1; i++) { // user arr.length -1 b/c we r comparing neighbor to the right
      // If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i+1]){
        // Swap those values
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        // [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        swapped = true;
        // Do not move this console.log
        console.log(arr.join(","));
      }
    }
    // If you get to the end of the array and no swaps have occurred, return
    // if (!swapped) return arr

  // Otherwise, repeat from the beginning

  }
  return arr;
}

function bubbleSort2(arr) {
  let swapped = false;

  for (let i = 0; i < arr.length -1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+i]] = [arr[j+i], arr[j]];
        swapped = true;
      }
    }
  }
}


module.exports = bubbleSort;
