// function linearSearch(arr, x) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] == x) {
//       return i;
//     }
//   }
// }
// console.log(linearSearch([23, 45, 56, 67], 56));
//
// function binarySearch(arr, x) {
//   let l = 0;
//   let r = arr.length - 1;
//   //let mid;
//   while (l <= r) {
//     let mid = Math.floor((l + r) / 2);
//
//     if (arr[mid] == x) {
//       return mid;
//     } else if (x > arr[mid]) {
//       l = mid + 1;
//     } else if (x < arr[mid]) {
//       r = mid - 1;
//     } else {
//       return mid;
//     }
//   }
// }
//
// console.log(binarySearch([2, 4, 5, 6, 7, 8, 9], 7));
//
// function selectionSort(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[min]) {
//         min = j;
//       }
//     }
//     if (min != i) {
//       let temp = array[i];
//       array[i] = array[min];
//       array[min] = temp;
//     }
//   }
//   return array;
// }
// let array = [5, 4, 6, 2, 8, 3, 7];
// let result = selectionSort(array);
// console.log(result);
//
//
//
// const swap = function (array1, firstIndex, secoundIndex) {
//   let temp = array1[firstIndex];
//   array1[firstIndex] = array1[secoundIndex];
//   array1[secoundIndex] = temp;
// };
// function bubbleSort(array1) {
//   for (let i = 0; i < array1.length - 1; i++) {
//     for (let j = 0; j < array1.length - 1 - i; j++) {
//       if (array1[j] > array1[j + 1]) {
//         swap(array1, j, j + 1);
//       }
//     }
//   }
//   return array1;
// }
//
// let array1 = [5, 4, 3, 2, 1];
// let result1 = bubbleSort(array1);
// console.log(result1);

// const array = [5, 4, 2, 1, 7, 6];
// function insertionSort(array) {
//   for (let i = 1; i < array.length; i++) {
//     let temp = array[i];
//     let j = i - 1;
//
//     while (j >= 0 && array[j] > temp) {
//       array[j + 1] = array[j];
//       j--;
//     }
//     array[j + 1] = temp;
//   }
//   //return array;
// }
//
// insertionSort(array);
// console.log(array);

// function merge(array, l, mid, r) {
//   let n1 = mid - l + 1;
//   let n2 = r - mid;
//
//   let a = new Array(n1);
//   let b = new Array(n2);
//
//   for (let i = 0; i < n1; i++) {
//     a[i] = array[l + i];
//   }
//
//   for (let j = 0; j < n2; j++) {
//     b[j] = array[mid + 1 + j];
//   }
//
//   let i = 0;
//   let j = 0;
//   let k = l;
//
//   while (i < n1 && j < n2) {
//     if (a[i] <= b[j]) {
//       array[k] = a[i];
//       i++;
//     } else {
//       array[k] = b[j];
//       j++;
//     }
//     k++;
//   }
//
//   while (i < n1) {
//     array[k] = a[i];
//     i++;
//     k++;
//   }
//
//   while (j < n2) {
//     array[k] = b[j];
//     j++;
//     k++;
//   }
// }
//
// function mergeSort(array, l, r) {
//   if (l < r) {
//     let mid = parseInt((l + r) / 2);
//
//     mergeSort(array, l, mid);
//     mergeSort(array, mid + 1, r);
//
//     merge(array, l, mid, r);
//   }
// }
//
// let array = [6, 7, 2, 3, 4, 8, 9, 1, 5];
// mergeSort(array, 0, array.length - 1);
// console.log(`The sorted array is ${array}`);

let arr = [5, 4, 3, 7, 9, 6, 1, 2, 8];

const swap = function (arr, leftIndex, rightIndex) {
  let temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
};

function partition(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(arr, left, right) {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right);

    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}

let result = quickSort(arr, 0, arr.length - 1);
console.log(result);
