function countNum(arr, n) {
  let k = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] % arr[j] == 0 || arr[j] % arr[i] == 0) {
        k++;
      }
    }
  }
  return k;
}
let arr = [4, 3, 3, 7, 2];
let n = arr.length;
console.log(countNum(arr, n));
