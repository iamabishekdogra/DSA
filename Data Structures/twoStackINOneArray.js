class twoStack {
  constructor(n) {
    this.arr = new Array(n);
    //let n = this.size;
    this.top1 = -1;
    this.top2 = this.size;
  }

  push1(x) {
    if (this.top1 < this.top2 - 1) {
      this.arr[this.top1] = x;
      this.top++;
    } else {
      console.log("stack is Overflow");
    }
  }

  push2(x) {
    if (this.top1 < this.top2) {
      this.arr[this.top2] = x;
      this.top--;
    } else {
      console.log("stack is OverFlow");
    }
  }

  pop1() {
    if (this.top1 >= 0) {
      x = this.arr[this.top1];
      this.top--;
    } else {
      console.log("stack is underflow");
    }
  }

  pop2() {
    if (this.top2 < this.size) {
      x = this.arr[this.top2];
      this.top++;
    } else {
      console.log("stack is underflow");
    }
  }
}
const ts = new twoStack();
ts.push1(5);
ts.push2(10);
ts.push2(15);
ts.push1(11);
ts.push2(7);
