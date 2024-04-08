"use strict"
const bucket =['coffee','chips','vegetables','salt','rice'];

const promise=new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&&bucket.includes("salt") &&bucket.includes("rice")){
        resolve("fried rice");
    }
    else{
        reject("not prepared");
    }
})

 
//how to consume
// promise.then((myRice)=>{
//     console.log("lets eat it")
// },(error)=>{
// console.log("not made")
// })


//another way
promise.then((myRice)=>{
    console.log("lets eat it")
}).catch((error)=>
    console.log("not made")
)


//returning promise froma  function

function ricePromise(){
    const bucket =['coffee','chips','vegetables','salt','rice'];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables")&&bucket.includes("salt") &&bucket.includes("rice")){
            resolve("fried rice");
        }
        else{
            reject("not prepared");
        }
    })
}

ricePromise().then((myRice)=>{
    console.log("lets eat it")
}).catch((error)=>
    console.log("not made")
)

//promise &&setTimeout

//I want to resolve/ reject promise after 2 seconds

// function mypromise(){
//     return new Promise((resolve,reject)=>{
//         const value =true;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }
//             else{
//                 reject();
//             }
//         },2000)
//     })
// }

// mypromise()
// .then(()=>{console.log("resolved")})
// .catch(()=>{console.log("rejected")})


//promise resolve

// const mypromise=Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//     console.log(value)
// })

function mPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}

// //promise chaining
mPromise()
    .then((value)=>{
        console.log(value);
        value+="bar";
        return value;
    })
    .then(value=>{
        console.log(value);
        value+=studio;
    })