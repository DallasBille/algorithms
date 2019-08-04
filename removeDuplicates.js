// write a function that removes duplicates of a sorted array of numbers.

// Ex. let duplicates = [1,1,2,2,3,3,3,4,4,4,4,5,5,6,7,7,10,10,10]
//     let removed = [1,2,3,4,5,6,7,10]

let duplicates = [1,1,2,2,3,3,3,4,4,4,4,5,5,6,7,7,10,10,10]

function removeDuplicates(array){
    if(array.length === 0){
        return []
    }
    // set counter
    let counter = 0
    for(let j = 1; j < array.length; j++){
// We iterate the array, until we find a number that doesnt equal "counter", when we find it, we replace number at the index ahead of counter(counter + 1, or counter++) with the number that is different. This runs until all unique numbers are at the beginning of the array, then splice at the index after our "counter" for the uniques array. It essentially finds the number that is different than itself(in the next order) and places that number in the index after itself.
        if(array[j] !== array[counter]){
            console.log(array)
            counter++
            array[counter] = array[j]
        }
    }
    array.splice(counter + 1, array.length)
    return array
}

// removeDuplicates(duplicates)

// console.log(removeDuplicates(duplicates));
