
let number = 8
// function steps(n){
//     let string = ""
//     let split = string.split("")
//
//     for(let i = 0; i <= n; i++){
//         string += " ";
//     }
//     for(let i = 0; i <= n + 1; i++){
//         split[i] = "#"
//     }
//     console.log(string);
//     return string
// }

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

    console.log(stair);
  }
}

steps(number)
