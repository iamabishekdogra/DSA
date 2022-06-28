//stack implementation using linked list

class node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new node(value);
    if (this.length == 0) {
      this.top = newNode;
    } else {
      let holdingVariable = this.top;
      this.top = newNode;
      newNode.next = holdingVariable;
    }
    this.length++;
  }

  remove() {
    const newTop = this.top.next;
    this.top = newTop;
    this.length--;
  }
}

const myStack = new stack();
myStack.append(1);
myStack.append(3);
myStack.append(2);
myStack.remove();
console.log(myStack);
