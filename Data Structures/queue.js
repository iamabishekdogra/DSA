class node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  Enqueue(data) {
    const newNode = new node(data);
    if (this.length == 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.length++;
    }
  }

  Dequeue() {
    //this.first = this.first.next;
    this.last.next = this.first;
    //this.length--;
  }
  display() {
    console.log(this.first);
    console.log(this.last);
  }
}

const myQueue = new Queue();
myQueue.Enqueue(2);
myQueue.Enqueue(3);
myQueue.Enqueue(4);
myQueue.Enqueue(5);
myQueue.Dequeue();
myQueue.display();
console.log(myQueue);
