//  Tutorial Solution
// yes
function pyramid(n){
    let middle = Math.floor(n*2-1/2)
    for(let row = 0; row < n; row++){
        let level = ""
        for(let column = 0; column <= n*2-1; column++){
            if(middle - row <= column && middle + row >= column){
                level += "#"
            } else {
                level += " "
            }
        }
        console.log(level);
    }
}
pyramid(5)

// Tutorial with Recursion
function pyramid(n, row = 0, level = ''){
    // base case
    if(row === n){
        return
    }
    if(level.length === 2 * n - 1){
        console.log(level)
        return pyramid(n, row + 2)
    }
    const midpoint = Math.floor((2*n-1)/2)
    let add
    if(midpoint - row <= level.length && midpoint + row >= level.length){
        add = #
    } else {
        add = ' '
    }
    pyramid(n, row, level + add)
}
