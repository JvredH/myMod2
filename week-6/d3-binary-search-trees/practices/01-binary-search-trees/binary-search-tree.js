// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    const newNode = new TreeNode(val);

    //if there is no root node, insert the new node;
    if (!currentNode) {
      this.root = newNode;
      return this;
    }

    // if value is less than current node's value, look to the left
    if (val < currentNode.val) {
      if(!currentNode.left) {
        currentNode.left = newNode;
      } else {
        return this.insert(val, currentNode.left)
      }
    }

    // if value is greater than current node's value, look to the right
    if (val > currentNode.val) {
      if(!currentNode.right) {
        currentNode.right = newNode;
      } else {
        return this.insert(val, currentNode.right)
      }
    }



  }

  search(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (val === currentNode.val) {
        return true;
      } else if(val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

//        4
//      /   \
//     2     7
//   / \    /  \
//  1   3  5    8

  // self - left - right

  preOrderTraversal(currentNode = this.root) {
    if (currentNode === null) return;

    console.log(currentNode.val);

    this.preOrderTraversal(currentNode.left)
    this.preOrderTraversal(currentNode.right)
  }


  // left - self - right

  inOrderTraversal(currentNode = this.root) {
    if (currentNode === null) return;



    // if(currentNode.left) {
      this.inOrderTraversal(currentNode.left)
    // }

    console.log(currentNode.val);

    // if (currentNode.right) {
      this.inOrderTraversal(currentNode.right)
    // }
  }

  // left - right - self;

  postOrderTraversal(currentNode = this.root) {
    if (currentNode === null) return;

    this.postOrderTraversal(currentNode.left)

    this.postOrderTraversal(currentNode.right)

    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {     // FIRST IN, FIRST OUT; QUEUE
      // your code here
      if (!this.root) return;
      const queue = [ this.root ];

      while (queue.length > 0) {
        let firstInQueue = queue.shift();
        console.log(firstInQueue.val);
        if (firstInQueue.left !== null){
          queue.push(firstInQueue.left);
        }
        if (firstInQueue.right !== null){
          queue.push(firstInQueue.right);
        }
      }
    }

  //        4
  //      /   \
  //     2     6
  //   / \    /  \
  //  1   3  5    7
  // 4, 6, 7, 5, 2, 3, 1
    // Depth First Traversal - Iterative
    depthFirstTraversal() {         // ADD TO END, REMOVE FROM END , STACK
      // your code here
      if (!this.root) return;
      const stack = [ this.root ];

      while (stack.length > 0) {
        let firstInStack = stack.pop();
        console.log(firstInStack.val);
        if (firstInStack.left !== null){
          stack.push(firstInStack.left);
        }
        if (firstInStack.right !== null){
          stack.push(firstInStack.right);
        }
      }
    }
}

module.exports = { BinarySearchTree, TreeNode };




