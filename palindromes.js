let palindrome = "racecar"
let notPalindrome = "notracecar"

// Tutorial Solutions
function isPalindrome(string){
    const reversed = string.split("").reverse().join("")
    return reversed === string
}
// Tutorial other Solutions
function isPalindrome(string){
    // split string, iterate each character, i = index at 0
    //  .every(), test each element against a test, return true if passes
    return string.split('').every((char, i)=> {
        return char === string[string.length - i - 1]
    })
}
// console.log(isPalindrome(palindrome));
// isPalindrome(palindrome)

function isPalindrome(string){
    let reversed = ''
    for(let letter of string){
        reversed = letter + reversed
    }
    if(reversed === string){
        return true
    } else {
        return false
    }
}
// console.log(isPalindrome(palindrome));

// RECURSIVE

function recursiveSol(string){
    let first = string[0]
    let last = string[string.length-1]
    if(string.length == 0 || string.length == 1){
        return true
    }
    if(first === last){
        return recursiveSol(string.slice(1, last))
    }
    return false
}

// console.log(recursiveSol(notPalindrome));
