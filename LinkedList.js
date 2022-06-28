class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(data) {
    const newNode = {
      value: data,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepand(data) {
    const newNode = {
      value: data,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
}

const myList = new LinkedList(10);
myList.append(11);
myList.append(12);
myList.prepand(9);
console.log(myList);
