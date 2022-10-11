// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
    var sum = 0;
    var hi = 0;
    var lo = 0;
    if(arr[0] > arr[1]){
      lo = arr[1]
      hi = arr[0]
    }
    if(arr[1] > arr[0]){
      lo = arr[0]
      hi = arr[1]
    }
    for(let i = lo; i <= hi; i++){
      sum += i
    }
    return sum;
  }
  
  console.log(sumAll([1, 4]));