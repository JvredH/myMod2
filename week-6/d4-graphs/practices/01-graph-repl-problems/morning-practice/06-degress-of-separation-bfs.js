const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function degreesOfSeparation(start, end) {
  let queue = [start];
  let visited = new Set([start]);

  while (queue.length) {
    let currPath = queue.shift();
    let currNode = currentPath[current.Path-1]
    if (currentNode === end) {
      return currentPath.length - 1;
    }

    adjList[currNode].forEach(el => {
      if(!visited.has(el)){
        visited.add(el);
        queue.push([...currPath, el])
      }
    })
  }
  return false;
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
