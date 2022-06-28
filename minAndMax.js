function getMinMax(arr, n) {
  let minMax = new Array();

  let i;
  let min;
  let max;

  if (n == 1) {
    minMax.min = arr[0];
    minMax.max = arr[0];
  }
  if (arr[0] > arr[1]) {
    minMax.min = arr[1];
    minMax.max = arr[0];
  } else {
    minMax.max = arr[1];
    minMax.min = arr[0];
  }

  for (let i = 2; i < n; i++) {
    if (arr[i] > minMax.max) {
      minMax.max = arr[i];
    } else if (arr[i] < minMax.min) {
      minMax.min = arr[i];
    }
  }
  return minMax;

  //   let max = Math.max(...arr);
  //   let min = Math.min(...arr);
  //
  //   for (let i = 0; i < n; i++) {
  //     if (arr[i] < min) {
  //       min = arr[i];
  //     }
  //
  //     if (arr[i] > max) {
  //       max = arr[i];
  //     }
  //   }
  //   let pair = [min, max];
  //   return pair;
}
console.log(getMinMax([2, 7, 9, 33, 5], 5));
