// REVERSING INTEGERS
let fiveHundo = -510
let testOne = 45
let testTwo = -184860
let testThree = 1
let testTh = 0

// MY SOLUTION
function reverseInt(integer){
    let done = ''
    let garbage = ''
    let numString = integer.toString()
    if(numString === "0"){
        done = "0"
    } else {
        for(let i = 0; i < numString.length ; i++){
            if(numString.charAt(i) === "0" || numString.charAt(i) === "-"){
                garbage = numString.charAt(i) + garbage
            } else {
                done = numString.charAt(i) + done
            }
        }
    }
    if(numString.includes("-")){
        done = "-" + done
    }
    return  parseInt(done)
}

// TUTORIAL SOLUTION

function reversedInt(integer){
    let reversed = integer.toString().split("").reverse().join("")

    if(integer < 0 ){
        return parseInt(reversed) * -1
    }
    return parseInt(reversed)
}

// console.log(reversedInt(testTwo));
