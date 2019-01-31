/*
function to find the difference of two arrays
*/

function differenceOfTwoArray(arrayOne,arrayTwo){
    // for(var i=j=0;i<arrayOne.length || j<arrayTwo.length;i++,j++){
    //     if(arrayOne.length==arrayTwo.length){
    //         console.log(true);
    //     if(arrayOne[i]==arrayTwo[j]){
    //         continue;
    //     }
    //     else{
    //         resultArray.push(arrayOne[i]);
    //     }
    // }
    // else if(arrayOne<arrayTwo){
    //     if(arrayOne[i]==arrayTwo[j]){
    //         continue;
    //     }
    //     else{
    //         resultArray.push(arrayOne[i]);
    //     }
    // }
    // else{
    //     if(arrayOne[i]==arrayTwo[j]){
    //         continue;
    //     }
    //     else{
    //         resultArray.push(arrayOne[i]);
    //     }
    // }
        //console.log(arrayOne[i],arrayTwo[j])
        
        //result array 
        resultArray = [];

        //loop for adding if arrayOne is bigger

        for(i=0;i<arrayOne.length;i++){
            if(arrayOne[i]==arrayTwo[i]){
                continue;
            }
            else{
            resultArray.push(arrayOne[i]);
        }
        }

        //loop for adding if arrayTwo is bigger

        for(j=0;j<arrayTwo.length;j++){
            if(arrayOne[j]==arrayTwo[j]){
                continue;
            }
            else{
            resultArray.push(arrayTwo[j]);
        }
        }
        console.log(resultArray);
    }

//arrays as input
arrayOne=['a','b','c'];
arrayTwo=['a','b','c','d'];
differenceOfTwoArray(arrayOne,arrayTwo);