class node {
  constructor(val) {
    (this.key = val), (this.left = null), (this.right = null);
  }
}

let root = null;

function printInorder(node) {
  if (node == null) return;

  printInorder(node.left);
  console.log(node.key);
  printInorder(node.right);
}

function printpreorder(node) {
  if (node == null) return;

  console.log(node.key);
  printpreorder(node.left);
  printpreorder(node.right);
}

function printpostorder(node) {
  if (node == null) return;

  printpostorder(node.left);
  printpostorder(node.right);
  console.log(node.key);
}

root = new node(1);
root.left = new node(2);
root.right = new node(3);
root.left.left = new node(4);
root.left.right = new node(5);

console.log(printpostorder(root));
console.log(printpreorder(root));
console.log(printInorder(root));
