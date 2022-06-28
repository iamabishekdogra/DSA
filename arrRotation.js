function reverseArr(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  //return arr;
}

function rotateArr(arr, d, n) {
  if (d == 0) return;
  d = d % n;
  reverseArr(arr, 0, d - 1);
  reverseArr(arr, d, n - 1);
  reverseArr(arr, 0, n - 1);
  return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const d = 2;
const n = arr.length;

const result = rotateArr(arr, d, n);
console.log(result);
