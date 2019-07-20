let string = "stringedit!"

function firstSol(string){
    let newS = string.split("")
    return newS.reverse()
}
// console.log(firstSol(string).join(""));
// yes
function secondSol(string){
    let reversed = ''
    // creating changeable variable, iterating string characters, and add them to the beginning of our empty string (reversed)
    for(let character of string){
        reversed = character + reversed
    }
    return reversed
}
// console.log(secondSol(string));

function thirdSol(string){
    let revArray = []
    let split = string.split('')
    split.forEach(letter => {
        revArray.unshift(letter)
    })
    return revArray.join("")
}
// console.log(thirdSol(string));
