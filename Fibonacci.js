// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function Fib(limit) {
    var FibSequence = [1, 2]
    var nextVal = 0
    var sum = 0
    for(i = 0; FibSequence[i + 1] <= limit; i++){
        nextVal += FibSequence[i] + FibSequence[i+1]
        if(nextVal <= limit){
            FibSequence.push(nextVal)
        }
        nextVal = 0
    }
    for(i = 0; i < FibSequence.length; i++){
        if(FibSequence[i] % 2 == 0){
            sum += FibSequence[i]
        }
    }
    // return FibSequence
    console.log(FibSequence)
    return sum
}

console.log(Fib(4000000))