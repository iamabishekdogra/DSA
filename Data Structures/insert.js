class LinkedList {
  constructor(value) {
    this.head = {
      data: value,
      next: null,
    };
    this.tail = this.head;
  }

  push(value) {
    const newNode = {
      data: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
  }

  print() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList(1);
list.push(3);
list.push(4);
list.push(5);
list.print();
console.log(list);
