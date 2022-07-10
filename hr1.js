var x = [3, 10, 2, 9];
var y = 1
function bonAppetit(bill, k, b) {
    var total = 0;
    for(var i = 0; i < bill.length; i++){
        total += bill[i] 
    }
    var a = (total - bill[k]) / 2;
    // console.log(b)
    // console.log(total)
    if(b != a){
        console.log(b - a)
    }
    if(a == b){
        console.log('Bon Appetit')
    }
}

console.log(bonAppetit(x, y))