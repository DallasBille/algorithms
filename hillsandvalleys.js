// Consider the following array A = [2,2,3,4,3,3,2,2,1,1,2,5]
//  There are two hills index [3..3] and [11..11], also two valleys [0..1] and [8..9].

//  Write a function that returns the total number of hills and valleys. THe above input should return 4. 2 hills, 2 valleys.



// let a = [2,2,3,4,3,3,2,2,1,1,2,5]

// for the first one, you need to know if your looking for a peak or a valley.
// it is a valley until
let a = [2,2,3,4,3,3,2,2,1,1,2,5,6,5,6,5,6,5,6,5,6,5,6,5,6,6,5,5,6,6,6,5,5,5,7,3]
function solution(a){
    let plains = a.every(element => element === a[0])
    if(plains){
        return 1
    } else {

        let castles = 2
        let isCastle = null
        for(var i = 0;i < a.length; i++){
            if(a[i] < a[i+1]){
                isCastle = true
                break
            } else if(a[i] > a[i+1]){
                isCastle = false
                break
            }
        }
        for(var i = 0; i < a.length; i++){
            if(isCastle){
                if(a[i] > a[i+1]){
                    isCastle = !isCastle
                    castles++
                }
            } else {
                if(a[i] < a[i+1]){
                    isCastle = !isCastle
                    castles++
                }
            }
        }
        console.log(isCastle);
        console.log(castles);
    }
}

// console.log(solution(a));
