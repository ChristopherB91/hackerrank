function beautifulDays(i, j, k) {
    let BeautyDays = 0;
    let c = i;
    for(let x = c; x <= j; x++){
        let reverseInt = i.toString().split('').reverse().join('')
        reverseInt = parseFloat(reverseInt) * Math.sign(reverseInt)
        if((i - reverseInt) % k == 0){
            BeautyDays++
        } 
        i++
    }
    return BeautyDays
}

console.log(beautifulDays(20, 23, 6))