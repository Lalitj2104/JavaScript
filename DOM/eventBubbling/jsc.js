"use strict"

const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");
//capturing
child.addEventListener("click",()=>{
    console.log("capture!! child");
},true);
parent.addEventListener("click",()=>{
    console.log("capture!! parent");
},true);

grandparent.addEventListener("click",()=>{
    console.log("capture!! grandparentparent");
},true);

document.body.addEventListener("click",()=>{
    console.log("capture!! body");
},true);
//this is called event bubbling 
child.addEventListener("click",()=>{
    console.log("u clicked on child");
})
parent.addEventListener("click",()=>{
    console.log("u clicked on parent");
})

grandparent.addEventListener("click",()=>{
    console.log("u clicked on grandparentparent");
})

document.body.addEventListener("click",()=>{
    console.log("u clicked on body");
})