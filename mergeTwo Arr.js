function merge(arr1, arr2, n, m) {
  let i = 0;
  let j = 0;
  let k = 0;
  let arr3 = [];

  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      arr3 = arr1[i];
      i++;
    } else {
      arr3 = arr2[j];
      j++;
    }
    k++;
  }

  while (i < n) {
    arr3 = arr1[i];
    i++;
    k++;
  }

  while (j < m) {
    arr3 = arr2[j];
    j++;
    k++;
  }
  arr3 = new Array(n + m);
}

let arr1 = [5, 4, 6, 7];
let arr2 = [1, 3, 2, 8];
console.log(merge(arr1, arr2, 4, 4));
