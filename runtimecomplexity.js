// Runtime complexity measure the performance of an algorithm.

// How much more processing power/time will it take to run the program if we increase the input?

// ============== CONSTANT RUNTIME O(1) =========================
// Description: No matter how many element we are working with, the operation will take the same amount of time.
let items = []
const getLast = items =>
  items[items.length-1];

// ============== LOGRITHMIC RUNTIME 0(log(n)) =========================
// Description: If doubling the amount of elements you are iterating over doesn't double the amount of work. Assume search operations are this.



// ============== LINEAR RUNTIME O(n) ========================
// Description: If the amount of times we perform an operation is dependent on our input.
// Identifier: Iterating through a collection, even if it isnt the whole thing.
let example = "linear runtime"
function reverseString(example){
    let reverse = ""
    for(let letter of example){
        reversed = character + reversed
    }
    return reversed
}
//  this has a linear runtime. For each additional character our "example" contains, we need to perform one addition step. For each character, we have one step to do. There is a one to one relationship between the number of input elements, and the operations on those elements. O(n)

// ============== QUASILINEAR  RUNTIME O(n*log(n))=========================
// Description: If doubling the amount of input elements does not double the amount of time performing an operation. Assume a sorting operation is n*log(n).

// ============= Quadratic Runtime O(n^2) =====================

// When the amount of time it takes to execute the program is the ^2 of input.
 // Ex. When we have a loop operating inside of a loop, then our runtime is O(n^2). Ex. Every input element has to be compared to every other input element.

let n = 7
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    // console.log(stair);
  }
}

//  ===================== EXPONENTIAL RUNTIME O(2^n) ===========
// Description: If you add a single element to the input, the processing power requires double.


// ===============Identifying Runtimes
// O(n) - when you loop through a collection.

// O(n + m) - when you have two loops running in a function, unested.
// O(n^2) - nested for loops.
//  O(n*m) - two nested loop iterating over different collections(comparing each element of one collection, against each element of another who's length's are different).
// O(n*(log(n))) - sorting.
// O(log(n)) - searching a sorted array.
