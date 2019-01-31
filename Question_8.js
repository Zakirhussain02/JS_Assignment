/*
 pattern that matches e-mail addresses
*/

/*
given email as input
*/
var pattern = 's.zakirhussain02@gmail.com';

//optional regex
//var reg = "[a-zA-Z0-9.]*@[a-zA-Z0-9_]*\.[a-zA-Z].{4}"

/*
regex pattern for matching till 3 char only
*/
var reg = "[\\w|\\d|.]*@[a-zA-Z]*.{4}"

/*
checking if pattern is matching with input
*/
matches = pattern.match(reg);

console.log(matches);