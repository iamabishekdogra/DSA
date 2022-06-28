class queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(x) {
    while (this.s1 != 0) {
      this.s2.push(this.s1.pop);
    }
    this.s1.push = x;

    while (this.s2 != 0) {
      this.s1.push(this.s2.pop);
    }
  }

  dequeue(){
    while
  }
}
