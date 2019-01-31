/* function that returns a passed string    with letters in alphabetical order */


//function
function reverseAlphabet(inputs){
    console.log(inputs.split('').sort().join(''));
}

//input for function
var inputs = "webmaster";
reverseAlphabet(inputs);
