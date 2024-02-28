"use strict"
let fruits=["apple","mango","grapes"];
console.log(fruits);

let numbers=[1,2,3,4,5];
console.log(numbers)


let mixed=[1,2,3,.34,"coder0"];
console.log(mixed)

//object literal
let obj={};

console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));



//push function in array
fruits.push("banana");
console.log(fruits);

//pop
console.log(numbers.pop());
console.log(numbers);


//unshift
numbers.unshift(100);
console.log(numbers)


//shift
console.log(fruits.shift());
console.log(fruits);


//clonning

 numbers=[1,2,3,4,5];
//  let arr=[1,2,3,4,5];
//  let arr=numbers.slice(0);
// let arr=[].concat(numbers);
let arr=[...numbers];

console.log(numbers===arr);
console.log(numbers);
console.log(arr);



//making array frm const

const fr=["banana"];
fr.push("apple");
console.log(fr); 


//for of loop

for(let fruit of fruits){
    console.log(fruit);
}


//for in loop -> this loop gives index 
for(let fruit in fruits){
    console.log(fruits[fruit]);
}