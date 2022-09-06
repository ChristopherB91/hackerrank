var n = '123445'
var reverse = ""

reverseString = () =>{
    for(i = n.length - 1; i >= 0; i--){
        reverse += n[i]
    }
    return reverse
}
console.log(reverseString())