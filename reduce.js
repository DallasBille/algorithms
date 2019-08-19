let nums = [10,9,8,7,6,5,4,3]

function addNums(array){
    return array.reduce((total, currentValue) => {
        console.log(total);
        return total + currentValue
    })
}

 // console.log(addNums(nums));

// Reduce applies a function to each element in an array and returns a single value. The return value of the provided function return the accumulated amount.


const data = [[1, 2, 6, 10], [4, 2, 6, 3], [7, 2, 6, 9]];
const datas = [1, 2, 6, 10, 4, 2, 6, 3, 7, 2, 6, 9];


let reducer = data.reduce((total, currentValue) =>{
    return total.concat(currentValue)
},[])

function remove(array){
    return array.filter(function(number, position){
        console.log(array.indexOf(number) === position);
        return array.indexOf(number) === position
    })
}

// console.log(remove(datas));
