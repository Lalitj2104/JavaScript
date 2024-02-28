"use strict"

//simple functions


function plus(){
    console.log(2+4);
}
plus();
// SingSong();

//reusable func
function sum(x,y){
    return x+y;
}

console.log(sum(4,7))

//is even
function iseven(x){
    if(x%2==0){
        return true;
    }
    else{
        return false;
    }
}

console.log(iseven(132))

//firstcharacter
function string(char){
    return char[0];
}
console.log(string('zcxc'));


// function expression
const ftarget=function(arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===x){
            return i;
        }

    }
    return -1;
}

const arr=[1,2,3,4,5,56];
console.log(ftarget(arr,5))


//arrow functions
function SingSong(){
    console.log("happy birthday to u");
}

const happy = ()=>{
    console.log("happy birthday to u")
}
happy(); 

//arrow function for even number

// const seven=(x)=>{
//     return  x%2==0?'even':'odd'
// }
//easy way to do 
const seven = x =>x%2===0;
console.log(seven(10));