"use strict"
const addall=(...num)=>{
    let sum=0;
    for(let n of num){
        sum+=n;
    }
    return sum;
}

console.log(addall(1,2,3,4,5,6))