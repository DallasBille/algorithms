// createFunction get store in global memory with the key/label "createFunction" assigned to the function definition(instructions inside the function)

function createFunction(){
    function multiplyByTwo(num){
        return num*2
    }
    return multiplyByTwo
}

//  the function definition "createFunction" is assigned to the label "secondLabel" and stored in global memory.
const secondLabel = createFunction

// the label "generateFunction" is unititialized until "createFunction" runs, then the label is assigned the return value of "createFunction"(the return valule is the function definition "multiplyByTwo"). Which takes in the argument of an integer.

// Once the "createFunction" function runs, it creates a local execution context, where the function  definition "multiplyByTwo" is stored to the label multiplyByTwo, then the function definition of multiplyByTwo  is returned.
// This means that generatedFunction is actually equal to the function definition multiplyByTwo, it was essentially renamed to "generateFunction".
const generateFunction = createFunction()

// the result label is saved in global memory, where we pass an argument to the return value
const result = generateFunction(20)

// console.log(result)




// Where you define your function determines what variable you have access to when you call the function.

// You would think that when you call "myNewFunction" you would't have access to the variable "counter" in "outer", but Javascript allows for this data to be available and for a function to have permanent memory.

// Counter gives you a place to store and make data available outside of execution context.

// Function have permanent memory. When outer in called, Javascript creates a link [[scope]](a hidden property under the hood of JS) between "counter" and  "incrementCounter" when saved in variable environment(a functions local memory). This link is referred to as the "BACKPACK", the function places variables and values declared outside of it in the backpack, and those values with it on return.

// C.O.V.E - closed over variable environment. This is the description of the backpack, where a returned function brings with it data(values, variables etc) in its Variable Environment(local execution context/memory)

// Lexical Scoping(Persistent Lexical Scoped Referenced Data ) - the idea that the data that was available(stored with a function in local memory(variable environment)) will always be available when you run that function.)

// The Closure - Some people call the backpack "the closure".

// When the function is saved initially, it carries surrounding data(data stored in the same vaiable environment) with it.

function outer(){
    counter = 0
    function incrementCounter(){
        counter++
        return counter
    }
    return incrementCounter
}

const myNewFunction = outer()
// this has access to value 0, it's then incremented and saved
myNewFunction()
// has access to value 1, its incremented and saved
myNewFunction()


console.log(myNewFunction());


//  Closures give our Functions persistent memories. Lets us have helper functions. MEMOIZATION!!!

// generators -

// Asynch Await.
