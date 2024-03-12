"use strict"

function outer(){
    function inner(){
        console.log("helllo")
    }
    return inner;
}


// const ans=outer();
// console.log(ans);
// console.log("hello")

// eg1

function hello(x){
    const a="varA";
    const b="varB";
    return function(){
        console.log(a,b,x);
    }


}

const ans=hello("arg");
ans();


//eg2

function myfunction(power){
    return function(number){
       console.log(number ** power);
    }
}
const square=myfunction(3);
square(2)


//eg3
function fun(){
    let counter=0;
    return function(){
        if(counter<1){
            console.log("hi you called me");
            counter++;
        }
        else{
            console.log("you already called me once");
        }
    }
}
const a=fun();
a();
a()