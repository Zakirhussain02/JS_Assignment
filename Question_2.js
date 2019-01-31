/*
find 5th largest number
*/

//sorting numbers
function sortNumber(a,b) {
    return a - b;
}

//numbers declared in list
var numbers = [1,2,3,4,5]//[14,35,67,87,8,76,2,4,5,66,78];

//numbers sorted
numbers.sort(sortNumber);
sortedNumbers = (numbers.join(","));

//sorted numbers in list
var array = sortedNumbers.split(',');

//finding list length
listLength = array.length;

//slicing the last fifth element in list
console.log(array.slice(-5)[0]);
