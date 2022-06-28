let item = [2, 4, 3, 7, 9, 1, 5];

function swap(item, leftIndex, rightIndex) {
  let temp = item[leftIndex];
  item[leftIndex] = item[rightIndex];
  item[rightIndex] = temp;
}

function partition(item, left, right) {
  let pivot = item[left];
  let i = left;
  let j = right;

  while (i <= j) {
    while (item[i] < pivot) {
      i++;
    }

    while (item[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(item, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(item, left, right) {
  let index;

  if (item.length > 1) {
    index = partition(item, left, right);

    if (left < index - 1) {
      quickSort(item, left, index - 1);
    }
    if (index < right) {
      quickSort(item, index, right);
    }
  }
  return item;
}

let result = console.log(quickSort(item, 0, item.length - 1));
console.log(result);
