const array = [4, 5, 2, 1, 8, 9, 7];

function insertionSort(array) {
  //let n = array.length;
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
}

insertionSort(array);
console.log(array);
