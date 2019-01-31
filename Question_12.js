/*
function that accepts two arguments,    
a string and a letter and the function will count the number of occurrences of the specified letter within the string.

Sample arguments : 'gmail.com', 'm'
Expected output : 2

*/

function specificLetter(input,arg){
    count = 0;
    for(var i=0;i<input.length;i++){
        if(input[i]==arg){
            count+=1
        }
        else{
            count = 1;
        }
    }
    console.log(count);
}
var input = "gmail.com"
var arg = 'm';
specificLetter(input,arg);
