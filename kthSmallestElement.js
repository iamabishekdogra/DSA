function quickSort(arr, left, right) {
  if (left < right) {
    let pi = partition(arr, left, right);

    quickSort(arr, left, pivot - 1);
    quickSort(arr, left, pivot + 1);
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, left, right) {
  let pivot = arr[left];
  let i = left;
  let j = right;

  while (arr[i] <= arr[j]) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
  }
  i++;
  j--;

  if (arr[i] <= arr[j]) {
    swap(arr, i, j);
  }
  return arr;
}
function kthElement(arr, n, k) {
  for (i = 0; i < n; i++) {
    for (i = 0; i < k; i++) {
      if (arr[i] < arr[k + 1]) {
        return arr[k];
      }
    }
  }
}

let arr = [1, 10, 7, 5, 6];
let k = 1;

let result = kthElement(arr);
console.log(result);
