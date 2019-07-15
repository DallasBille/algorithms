let theString = "this sentence is not capitalized"

function capitalize(string){
    let singleLetters = string.split("")
    for(let i = 0; i < singleLetters.length; i++){
        if(i === 0){
            singleLetters[0] = singleLetters[0].toUpperCase()
        }
        if(singleLetters[i] === " "){
            singleLetters[i+1] = singleLetters[i+1].toUpperCase()
        }
    }
    console.log(singleLetters.join(""));
    return singleLetters.join()
}

function capitalize(string) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

// capitalize(theString)
