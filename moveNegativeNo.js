// function moveNeg(arr, n) {
//   //let n = arr.length;
//   let j = 0;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] < 0) {
//       if (i != j) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//       j++;
//     }
//   }
//   return arr;
// }
// console.log(moveNeg([-1, 2, -3, 4, -5, 6], 6));

function reArrang(arr, n) {
  let low = 0;
  let high = n - 1;
  while (low < high) {
    if (arr[low] < 0) {
      low++;
    } else if (arr[high] > 0) {
      high--;
    } else {
      let temp = arr[low];
      arr[low] = arr[high];
      arr[high] = temp;
    }
  }
  return arr;
}
console.log(reArrang([-1, 2, -3, 4, -5, 6], 6));
