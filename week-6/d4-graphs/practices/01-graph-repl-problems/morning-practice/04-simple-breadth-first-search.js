const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function breadthFirstSearch(start, end) {
  let visited = new Set(start);
  let queue = [start];

  while (queue.length) {
    let curr = queue.shift();

    if (curr === end) return true;

    visited[curr].forEach(el => {

    })
  }
}


console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
