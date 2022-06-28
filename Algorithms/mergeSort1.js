function merge(arr, l, mid, r) {
  let n1 = mid - l + 1;
  let n2 = r - mid;

  let a = new Array(n1);
  let b = new Array(n2);

  for (let i = 0; i < n1; i++) {
    a[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    b[j] = arr[mid + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
    if (a[i] <= b[j]) {
      arr[k] = a[i];
      i++;
    } else {
      arr[k] = b[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = a[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = b[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if (l < r) {
    //let mid = l + parseInt((r - l) / 2);
    let mid = parseInt((l + r) / 2);

    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);

    merge(arr, l, mid, r);
  }
}

let arr = [5, 4, 8, 9, 1, 2, 3, 6, 7];
mergeSort(arr, 0, arr.length - 1);
console.log(`The sorted array is ${arr}`);
