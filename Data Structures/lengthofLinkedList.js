class lengthList {
  constructor(value) {
    this.head = {
      data: value,
      next: null,
    };
  }

  push(value) {
    const newNode = {
      data: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
  }
  getCount() {
    let temp = this.head;
    let count = 0;
    while (temp != null) {
      count++;
      temp = temp.next;
    }
    return count;
  }
}
const link = new lengthList(1);
link.push(3);
link.push(1);
link.push(2);
link.push(1);
console.log("Count of nodes is " + link.getCount());
console.log(link);
