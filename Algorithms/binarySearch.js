function binarySearch(array, data) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (data == array[mid]) {
      return mid;
    } else if (data < array[mid]) {
      right = mid - 1;
    } else if (data > array[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
}
console.log(binarySearch([5, 9, 17, 23, 25, 45, 59, 63, 71, 80], 17));
