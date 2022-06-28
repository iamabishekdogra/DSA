const swap = function (array, firstIndex, secoundIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secoundIndex];
  array[secoundIndex] = temp;
};

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

console.log(bubbleSort([23, 34, 43, 21, 13]));
