class LinkedList {
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

  prepand(value) {
    const newNode = {
      data: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  traversing(req) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != req) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  insert(index, value) {
    const newNode = {
      data: value,
      next: null,
    };
    const leaderNode = this.traversing(index - 1);
    const nextNode = leaderNode.next;
    leaderNode.next = newNode;
    newNode.next = nextNode;
  }
}

const list = new LinkedList(11);
list.append(15);
list.append(16);
list.append(17);
list.append(18);
//list.prepand(10);
list.insert(1, 12);
console.log(list);
