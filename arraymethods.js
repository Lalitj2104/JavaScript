"use strict"

//important methods
//1. forEach

const no=[1,2,3,4,5];
function func(number,index){
    console.log(`inddex is ${index} and number is ${number}`);
}

no.forEach(func);

//multipy each number by 2

no.forEach(function(number) {
    console.log(`multiplied no is ${number*2}`)
})

const obj=[
    {name:'lalit',roll:2210991847},
];

obj.forEach(fun=>{
    console.log(fun.name)
})


//2. map method

const num=[3,6,1,4,8];

const sq=function(num){
    return num*num;
}

const square=num.map(sq);
console.log(square);