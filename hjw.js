"use strict"
// console.log(this);
// console.log(window);
// // console.log(name);  //this is deprecated
// // var name = "harsh";
// // console.log(name);

// console.log(myfunc);
// console.log(fullname);

// function myfunc(){
//     console.log("this is my func");
// }

// var first="harsh";
// var last="jain";
// var fullname=first+ " "+last;
// console.log(fullname);


let foo="foo";
console.log(foo);
function getFullName(first,last){
    console.log(arguments);
    let myvar="var inside function";
    console.log(myvar);
    const fullname=first+" "+last;
    console.log(fullname);
    return fullname;
}
const personName=getFullName("harsh","Jain");
console.log(personName);