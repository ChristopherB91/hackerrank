// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function multipleSum(num1, num2, limit) {
  var sum = 0;
  for (i = 0; i <= limit; i++) {
    if (i % num1 == 0 || i % num2 == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(multipleSum(3, 5, 1000));
