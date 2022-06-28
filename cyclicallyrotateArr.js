function cycleRotateArr(arr, n) {
  let i = 0;
  let j = n - 1;

  while (i != j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
  }
  return arr;
}

console.log(cycleRotateArr([1, 2, 3, 4, 5], 5));
