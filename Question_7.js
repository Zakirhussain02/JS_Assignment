/*
function to sort the following array of objects by title value
*/

//constructor for library 

var library = function(library) {
    this.author = library.author
    this.title = library.title;
    this.libraryID = library.libraryID;
}    

//array for storing list
var objArray = [];

//adding objects to list
objArray.push(new library({ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}));
objArray.push(new library({ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}));
objArray.push(new library({ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}));

//sort the list after comparing
console.log(objArray.sort(function(a, b) { return a.title > b.title}));