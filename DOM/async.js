"use strict"
console.log("script start");
///setTimeout function
// setTimeout(()=>{
//     console.log("inside function")
// },1000);
// console.log("end")


//if we not want to print after completing the current process
console.log("script start");
///setTimeout function
const id=setTimeout(()=>{
    console.log("inside function")
},1000);
for(var i=0;i<10;i++){
    console.log("...")
}
clearTimeout(id);
console.log("end");
console.log("script  good");


// setInterval
console.log("script start");
//   
console.log("end");


//callbacks

function func(callback){
    console.log("MY func is doing func1");
    callback();

}

func(()=>{
    console.log("myfunc is doing function2")
})

//second
function getTwoNumbers(num1,num2,onSuccess,onFaliure){
    if(typeof num1==="number" &&typeof num2==="number")
        onSuccess(num1,num2);
    else{
        onFaliure()
    }
}

getTwoNumbers("4",4,(num1,num2)=>{
    console.log(num1+num2);
},()=>{
    console.log("enter valid number");
});

