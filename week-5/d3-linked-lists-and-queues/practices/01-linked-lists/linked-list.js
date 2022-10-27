class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = undefined;
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val, null);

    newNode.next = this.head;
    this.head = newNode;
    this.length++
    //this.print()

  }

  addToTail(val) {
    const newNode = new LinkedListNode(val);
    this.length++;

    //case 1: There are NOT any nodes in the list;
    if(!this.head) {
      this.head = newNode;
      return this;
    }
    // case 2: There ARE nodes in the list;
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    // if (this.head === null) {
    //   this.head = newNode(val);
    //   return;
    // }

    // let curr = this.head;
    // while (curr.next !== null) {
    //   curr = curr.next;
    // }
    // curr.next = new Node(val);
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
