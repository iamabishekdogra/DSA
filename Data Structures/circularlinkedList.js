class linkedlist {
  constructor(val) {
    this.head = {
      data: val,
      next: null,
    };
    this.tail = this.head;
  }

  push(val) {
    newNode = {
      data: val,
      next: null,
    };
    let current = this.head;
    if (current == undefined) {
      this.head = newNode;
      newnode.next = this.head;
    } else {
      while (current.next != null) {
        current = current.next;
      }
    }
  }
}
