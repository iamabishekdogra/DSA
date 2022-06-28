// function segregateElements(arr, l, r) {
//   while (l <= r) {
//     if (arr[l] < 0 && arr[r] < 0) {
//       l += 1;
//     } else if (arr[l] > 0 && arr[r] < r) {
//       let temp = arr[l];
//       arr[l] = arr[r];
//       arr[r] = temp;
//       l += 1;
//       r -= 1;
//     } else if (arr[l] > 0 && arr[r] > 0) {
//       r -= 1;
//     } else {
//       l += 1;
//       r -= 1;
//     }
//   }
//   return arr;
// }
// function display(arr, r) {
//   for (let i = 0; i < r; i++) {
//     console.log(arr[i] + " ");
//   }
// }
//
// // Driver Code
// let arr = [-12, 11, -13, -5, 6, -7, 5, -3, 11];
// let arr_size = arr.length;
//
// // Function Call
// segregateElements(arr, 0, arr_size - 1);
// display(arr, arr_size);

//console.log(segregateElements([1, -1, 3, 2, -7, -5, 11, 6], 0, 7));

function shiftAll(arr, n) {
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) {
      if (i != j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      j++;
    }
  }
  return arr;
}
console.log(shiftAll([1, -1, 3, 2, -7, -5, 11, 6], 8));
