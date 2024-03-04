"use strict"
const obj1={
    key1:"value1",
    key2:"value2"
}

const obj2=Object.create(obj1);
obj2.key3="value3";
console.log(obj2)



function hello(){
    console.log("hello world");
}

console.log(hello.name)

hello.myprop="hello there how r u?";
console.log(hello.myprop)

// javascript function ===>function+object
// we can add our own propetrties

//function provides more useful properties

//function give us free space called prototype 
console.log(hello.prototype)

//only functions can provide prototype 