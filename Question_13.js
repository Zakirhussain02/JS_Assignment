/*
Flatten the following object:var myObj = [5, [22], [[14]], [[4]],[5,6]]
*/

var input = [5, [22,12], [[14]], [[4]],[5,6]] ;
// for(var i=0;i<input.length;i++){
//     input[i] = input[i][0];
//     console.log(input[i]);
// }
var result = [].concat.apply([], input);

console.log(result);
//console.log(x);

