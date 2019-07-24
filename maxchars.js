// MAXCHARS

let str = "assdddffffggggghhhhhhhjjjjjjjjkkkkkkkkkllllllllllqqqqqqqqqqqqqqqqqqqqq"
function maxChar(str) {
    let split = str.split("")
    let newObj = {}
    split.forEach(character => {
        if(newObj[character]){
            newObj[character] += 1
        } else {
            newObj[character] = 1
        }
    })
    let character = ''
    let most = 0
    for(var key in newObj){
        if(newObj[key] > most){
            most = newObj[key]
            character = key
        }
    }
    return character
}
 // console.log(maxChar(str));

 // ============ TUTORIAL ANSWER =======================


function maxChars(str){
    let newObj = {}

    for(chars in str){
        if(!newObj[chars]){
            newObj[chars] = 1
        } else {
            newObj[chars]++
        }
    }
}
