class linkedlist {
  constructor(value) {
    this.head = {
      data: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      data: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      data: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  traverse(req) {
    let counter = 0;
    let currentNode = this.head;

    while (counter != req) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    const newNode = {
      data: value,
      next: null,
    };
    const leaderNode = this.traverse(index - 1);
    const nextNode = leaderNode.next;
    leaderNode.next = newNode;
    newNode.next = nextNode;
  }

  reverse() {
    let prevNode = null;
    let currNode = this.head;

    while (currNode != null) {
      let nextNode = curr.next;
      currNode.next = prevNode;

      prevNode = currNode;
      currNode = nextNode;
    }
    this.tail = this.head;
    this.head = prev;
  }

  swap() {
    let current = this.head;
    let temp = current;
    current = current.next;
    current.next = temp;
  }
}

let linkList = new linkedlist(3);
linkList.append(4);
linkList.append(6);
linkList.append(7);
linkList.append(8);
linkList.prepend(1);
linkList.insert(1, 2);
//linkList.reverse();
//linkList.deletion(1);
linkList.swap();
console.log(linkList);
