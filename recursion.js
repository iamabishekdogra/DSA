const recursion = (i, n, sum) => {
  if (i == n) {
    sum += i;
    console.log(sum);
    return;
  }
  sum += i;
  recursion(i + 1, n, sum);
  console.log(i);
};
console.log(recursion(1, 5, 0));
