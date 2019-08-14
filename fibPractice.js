let series = [0,1,1,2,3,5,8,13,21,34,55]

function fibonacci(num){
    if(num < 2){
        return num
    } else {
        console.log("...loading");
        return example(num-1) + example(num-2)
    }
}

function memoizer(funct){
    let cache = {}
    return function(...args){
        if(cache[args]){
            return cache[args]
        } else {
            let result = funct.apply(this, args)
            cache[args] = result
            return result
        }
    }
}

// So we must change our fibonacci functions recursive call to "example" because we need the recursive calls to be run through the memoizer function as well.

example = memoizer(fibonacci)
// Note: if I try to use let, or const example = memoizer(fibonacci), it wont work because of scoping in my functions. you must use var example, or just reassign the value.
// example(10)
// console.log(example(10));
// example(8)
// console.log(example(8));
// example(11)
// console.log(example(11));
