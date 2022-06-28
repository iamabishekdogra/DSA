class node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class stack {
  constructor(value) {
    this.top = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new node(value);
    if (this.length == 0) {