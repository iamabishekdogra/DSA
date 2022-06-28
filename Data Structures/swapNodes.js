class Linklist {
  constructor(value) {
    this.head = {
      data: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  swapNodes(x, y) {
    if (x == y) {
      return;
    }

    let prevX = null;
    let currX = this.head;
    while (currX != null && currX.data != x) {
      prevX = currX;
      currX = currX.next;
    }

    let prevY = null;
    let currY = this.head;
    while (currY != null && currY.data != y) {
      prevY = currY;
      currY = currY.next;
    }

    if (currX == null || currY == null) {
      return;
    }

    if (prevX != null) {
      prevX.next = currY;
    } else {
      this.head = currY;
    }

    if (prevY != null) {
      prevY.next = currX;
    } else {
      this.head = currX;
    }

    let temp = currX.next;
    currX.next = currY.next;
    currY.next = temp;
  }
  push(value) {
    const newNode = {
      data: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
}

let swap = new Linklist(1);
swap.push(3);
swap.push(8);
swap.push(4);
swap.push(7);
swap.swapNodes(1, 3);
console.log(swap);
