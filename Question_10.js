/*
compute, the average marks of the following students Then, this average is used to determine the corresponding grade
*/

var object = [["David",80],["Vinoth",77],["Divya",88],["Ishitha",95],["Thomas",68]];
var average = 0;
for (var i=0;i<object.length;i++){
    average += (object[i][1])/object.length;
    
}

//average of students

console.log("Avergae of students = ",average);

//conditions for checking the grade as per average
if(average < 60){
    console.log("F");
}
else if(average < 70){
    console.log("D");
}

else if(average < 80){
    console.log("C");
}
else if(average < 90){
    console.log("B");
}
else if(average< 100){
    console.log("A");
}
