class Node {
  constructor(value) {
    (this.data = value), (this.next = null);
  }
}

const firstNode = new Node(1);
console.log(firstNode);
module.exports = Node;
