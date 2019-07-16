let something = "I hope This string contains A bunch of vowels!"

function vowels(str){
    let vowelArray = ["a","e","i","o","u"]
    let clean = str.toLowerCase()
    let count = 0

    for(let i = 0; i < clean.length; i++){
        for(let a = 0; a < vowelArray.length; a++){
            if(clean[i] === vowelArray[a]){
                count++
            }
        }
    }
    return count
}

// console.log(vowels(something));

// Tutorial solution 1 ( iterative )
function vowels(str){
    let count = 0
    let v = "aeiou"

    for(let letter of str.toLowerCase()){
        if(v.includes(letter)){
            count++
        }
    }
    return count
}

function vowels(str){
    // how to set this up, anything inside the brackets is what we want to match with. The "gi" are options, the "g" makes sure we dont stop after the first match, the "i" automatically removes case sensitivity.
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}
