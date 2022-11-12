function saveThePrisoner(n, m, s) {
    let num = s - 1
    if(s == m){
        num++
    }
    for(let i = s; i < m; i++){
        num++
        if(num == n + 1){
            num = 1
        }
        // console.log(num)
    }
    return num
    // return 'end'
}

console.log(saveThePrisoner(7,19,2))
console.log(saveThePrisoner(3,7,3))
console.log(saveThePrisoner(5,2,1))
console.log(saveThePrisoner(5,2,2))