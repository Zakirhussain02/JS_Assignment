/*
var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

Exercise 1: Display all objects with occupation as 'Programmer'
Exercise 2: Sort the object basis the age key in the descending order
console.log("Ascending Names: "+names.sort()+ "\n" + "Descending Names: "+ names.reverse());
*/

var library = function(library) {
    this.name = library.name
    this.age = library.age;
    this.occupation = library.occupation;
}    

//array for lists
var objArray = [{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];


//comparing if programmer is present in list
var x =[];
for(var i=0;i<objArray.length;i++){
    if (objArray[i].occupation === "Programmer"){
        x.push(objArray[i]);
    }
    else{
        continue;
    }
}
console.log(x);

//sorting based age
console.log("The decending of function by age");
console.log(objArray.sort(function(a, b) { return a.age> b.age}).reverse());

//writing the occupation

var teamLeader = [];
var programmer = [];
for (var i=0;i<objArray.length;i++){
    var subName ={'name': objArray[i].name,'age':objArray[i].age};
    if(objArray[i].occupation==="Team Leader"){
        teamLeader.push(subName);
    }
    else {
        programmer.push(subName);
    }
    }
var obj = {teamLeader,programmer};
console.log(obj);

//converting to map
console.log("printing names");
const names = objArray.map(x => x.name);
console.log(names);