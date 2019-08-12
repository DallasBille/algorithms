// Print out the n-th entry in the fibonacci series.
// Fibonacci series is a series of number where the number is the sum of the previous two numbers.

// series [0,1,1,2,3,5,8,13,21,34]

// Iterative solution.

function fib(n){
//  We know that we need to start out with two numbers, because Fib depends on the next element be the previous two added together.
    const series = [0, 1];
    for(let i = 2; i <= n; i++){
        series.push(series[i-2] + series[i-1])
    }
    return series[n]
}
// console.log(slowRecursiveFib(25));
// RUNTIME COMPLEXITY O(n) linear runtime.


// Recursive Solution SUPER COMMON QUESTION
function recursiveFib(n){
    // this recursive solution breaks down to 0 and 1 values, until it hits our base case, then adds them together and return it.
    while(n > 2){
        return recursiveFib(n-1) + recursiveFib(n-2)
    }
    return n
}
// RUNTIME COMPLEXITY O(2^n) exponential runtime. As n increase by one, our calculations almost double.

// Is there a way to make the recursive Fib function more efficient?
// Well since we are call the Fib function multiple times for the values fib(0) and fib(1) maybe we can do something with that so we are only calling fib() with unique nums.

// ===== Segway to Memoization! ===============
// memoization - stores the arguments of each function call along with the result. If the function is called again with the same arguments, return the precomputed result instead of running the function again.

function genericMemoize(slowFunction){
    // this will take in the slow recursive Fib function, and return the fast fib function(also works for other things that need memoized)
    const cache = {}
    return function(...args){
        if(cache[args]){
            return cache[args]
        }
        const result = slowFunction.apply(this, args)
        cache[args] = result
        return result
    }
}
let fastFib = genericMemoize(recursiveFib)
// console.log(fastFib(10))



// Unrecursive

function nonRec(index){
    let series = [0,1]
    for(let i = 2; i <= index; i++){
        series.push(series[i-1] + series[i-2])
    }
    return series[index]
}
// recursive
// function fibRec(index){
//     if(index < 2){
//         return index
//     } else {
//         return fibRec(index -1) + fibRec(index - 2)
//     }
// }

// recursive with memoization

function fibRec(index){
    if(index < 2){
        return index
    } else {
        return runner(index -1) + runner(index - 2)
    }
}

function memoizer(funct){
    const cache = {}
    return function(...args){
        if(cache[args]){
            return cache[args]
        } else {
            result = funct.apply(this, args)
            cache[args] = result
            return result
        }
    }
}


let runner = memoizer(fibRec)

// console.log(runner(10))



// console.log(fibRec(10))
