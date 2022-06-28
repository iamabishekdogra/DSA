class linkList {
  constructor(value) {
    this.head = {
      data: value,
      next: null,
    };
    this.tail = this.head;
  }

  deletion(key) {
    let temp = this.head;
    let prev = null;

    if (temp != null && temp.data == key) {
      this.head = temp.next;
      return;
    }

    while (temp != null && temp.data != key) {
      prev = temp;
      temp = temp.next;
    }

    if (temp == null) {
      return;
    } else {
      prev.next = temp.next;
    }
  }

  push(value) {
    const newNode = {
      data: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
  }

  print() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new linkList(1);

list.push(2);
list.push(8);
list.push(4);
list.push(7);
list.push(9);
list.deletion(1);
list.print();
console.log(list);
