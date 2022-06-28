// function firstNotRepeatedWord(s) {
//   for (let i = 0; i < s.length; i++) {
//     if (s.indexOf(s.charAt(i) == s.lastIndexOf(s.charAt(i)))) {
//       return s.charAt(i);
//     }
//   }
// }
// let result = firstNotRepeatedWord("abhishek");
// console.log(result);
//How to find the missing number in a given integer array of 1 to 100?
// function missingNum(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == null) {
//       return i;
//     }
//   }
// }
// let result = missingNum([1, 2, 3, 4, 5, 6, 7, , 9]);
// console.log(result);

//largest and smallest no  in an usorted array

function largesAndSmallestNo(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return {
    min,
    max,
  };
}

let result = largesAndSmallestNo([3, 5, 2, 6, 1, 0, 8]);
console.log(result);
