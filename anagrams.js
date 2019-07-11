let stringOne = "dusty"
let stringTwo = "study"
let stringThree = "comaparison"


function anagram(stringOne, stringTwo){
    let splitOne = stringOne.split("")
    let verdict = null

    splitOne.forEach(letter => {
        if(!stringTwo.includes(letter)){
            verdict = false
        } else {
            verdict = true
        }
    })
    return verdict
}

// console.log(anagram(stringOne, stringTwo));
