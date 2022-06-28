// stack implementation using array

const { kill } = require("process");

let t = -1;
let max = 1000;
let a = Array(max).fill(0);

function isEmpty() {
  return t < 0;
}

function push(x) {
  if (t >= max - 1) {
    console.log("stack underflow");
    return false;
  } else {
    t += 1;
    a[t] = x;
  }
}

function pop() {
  if (t < 0) {
    console.log("stack underflow");
    return 0;
  } else {
    let x = a[t];
    t -= 1;
    return x;
  }
}
function peek() {
  if (t < 0) {
    console.log("stack");
  }
}

// class stack {
//   constructor() {
//     this.array = [];
//   }
//   append(data) {
//     this.array.push(data);
//   }
//   remove(data) {
//     this.array.pop(data);
//   }
//   peek() {
//     console.log(this.array[this.array.length - 1]);
//   }
// }
//
// const mystack = new stack();
// mystack.append(1);
// mystack.append(2);
// mystack.append(3);
// mystack.append(4);
// mystack.append(5);
// mystack.append(6);
//
// mystack.remove();
// mystack.peek();
// console.log(mystack);
