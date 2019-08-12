let test = [1,2,3,4,5,6,7,8,9,10,11]

function chunk(array, size){
    let chunked = []

    if(size >= array.length){
        chunked.push(array)
    }
    while(array.length >= size){
        chunked.push(array.splice(0, size))
    }
    if(array.length % size != 0){
        chunked.push(array)
    }
    return chunked
}

// Tutorial Solutions

function chunked(array, size){
    const chunked = []

    for(let element of array){
        const last = chunked[chunked.length - 1]
        if(!last || last.length === size){
            chunked.push([element])
        } else {
            last.push(element)
        }
    }
}
// console.log(chunk(test, 3));
