//Knowing that we have access to whatever
//the user inputs into our function expression, we then write...

function memo(funct){
    let cache = {}
 return function(){
     var key = JSON.stringify(arguments);
     if (cache[key]){
      return cache[key];
     }

    else{
      //apply() comes in handy here and will simply
      //return the value of the function it calls
      val = funct.apply(this, arguments);
      //then we set the value of the function to the key(argument).
      //The next time the function runs,
      //if the argument is the same, we simply return
      //the value without having to have the function execute.
      cache[key] = val;
      return val;
    }
 }
}

var fib = memo(function(n) {
   if (n < 2){
     return 1;
   }else{
    //We'll console.log a loader every time we have to recurse
     console.log("loading...");
     return fib(n-2) + fib(n-1);
   }
});

// fib(10)
// console.log(fib(10));
// fib(8)
// console.log(fib(8));
// fib(11)
// console.log(fib(11));
