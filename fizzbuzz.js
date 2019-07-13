// ================ FIZZBUZZ Interview Question ===============
// AWESOME FIZZBUZZ
// write a program that prints out the number 1-100, however, if a number is divisible by 3, print "Fizz". If Divisible by 5, print "buzz", for number divisible by both three and five, print "fizzbuzz"

let array = []
for(let i = 0; i <= 100; i++){
    array.push(i)
}
// console.log(array);


function fizzBuzz(array){
    for(let i = 1; i<= array.length; i++){
        if(array[i] % 5 == 0 && array[i] % 3 == 0){
            console.log(array[i],"fizzbuzz")
        }
        if(array[i] % 3 == 0 && array[i] % 5 != 0){
            console.log(array[i],"fizz");
        }
        if(array[i] % 5 == 0 && array[i] % 3 != 0){
            console.log(array[i],"buzz");
        } else {
            console.log(array[i]);
        }
    }

}

// fizzBuzz(array)
