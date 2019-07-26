// FOR LOOPS

// const loops = ["for","for...in","for...of","while","do-while"]
// const thisString = "yeah this is a string"
// const names = {"not john": "Steven", "still not john": "Walter", "is john": "John", "nope": "Crissy", "nah": "James"}
// for(var i = 0; i < loops.length; i++){
//    console.log(loops[i])
// }
// function reversed(loops){
//     console.log(loops.reverse());
//    return loops.reverse()
// }
// reversed(loops)
// function reverseString(array){
//     let reversed = []
//     for(i = array.length - 1; i >= 0; i--){
//         reversed.push(array[i])
//     }
//     console.log(reversed);
//     return reversed
// }
// reverseString(loops)

// function findJohn(obj){
//     for(element in obj){
//         if(obj[element] === "John"){
//             console.log("found him");
//             break
//         } else {
//             console.log(element);
//         }
//     }
// }

// findJohn(names)




let sentence = "this is the string we will be iterating to see which letter occurs the most"
let letterToCount = "c"

function highestLetter(string,letterToCount){
   let count = 0
       for(element of string){
           if(element === letterToCount){
              count++
           }
       }
       console.log(`${letterToCount} occurred ${count} times in the sentence.`)
       return `${letterToCount} occurred ${count} times in the sentence.`
   }
// highestLetter(sentence,letterToCount)

function timout(callback){
    console.log("Calculating...");
    callback(sentence, letterToCount)
}

// timout(highestLetter)
