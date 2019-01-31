// /*
// remove duplicate items from an array
// */

// var x = [1,1,5,6,7,7,8,4,2,1,1,2,7,5];
// var y = [];
// //y.push(x[0]);
// for(var i=0;i<x.length;i++){
//     if(!(x[i] in y)){
//         y.push(x[i]);
//         //console.log(y);
//     }
//     else{
//         y.push(x[i]);
//     }
// }
// console.log(y);

var x = [1,1,5,6,7,7,8,4,2,1,1,2,7,5];
var y = [];
for(var i=0;i<x.length;i++)
{
for(var j=0;j<y.length;j++)
{
if(x[i] == y[j])
{
break;
}
}
if(j==y.length)
{
y.push(x[i]);
}
}
console.log(y);
/*
// remove duplicate items from an array
// */

// var x = [1,1,5,6,7,7,8,4,2,1,1,2,7,5];
// var y = [];
// //y.push(x[0]);
// for(var i=0;i<x.length;i++){
//     if(!(x[i] in y)){
//         y.push(x[i]);
//         //console.log(y);
//     }
//     else{
//         y.push(x[i]);
//     }
// }
// console.log(y);
