/*
Convert the following JSON string to an object and access the value of the jason property.

*/
//input for the converstion
var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';

//converting the json file
var obj = JSON.parse(jsonStr);

//print the json file
console.log(Object.values(obj));