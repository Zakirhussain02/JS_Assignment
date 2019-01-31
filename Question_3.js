/*
add - in between two odd numbers
*/

//get user input 

const readline = require('readline');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question('Enter a number ', (number) => {

    //store output here
    result = [number[0]];

    //iterate through the list
    for(var i = 1; i<number.length;i++){

        //check if there are two even numbers
        if(number[i-1]%2==0 && number[i]%2 == 0){

            //add them to list
            result.push('-',number[i]);
        }

        // else add to list without any operation
        else{
            result.push(number[i]);
        }
    }

    //print the result
    console.log(result.join(''));

    //close the result
    rl.close();
    
});