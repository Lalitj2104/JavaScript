"use strict"
//keypress
const body=document.body;
body.addEventListener("keypress",(e)=>{
    console.log(e.key);
})


//mousehover

const mainbutton=document.querySelector(".btn-headline");

// console.log(mainbutton);
body.addEventListener("mouseover",()=>{
    console.log("mouse hover event occured!!")
})

body.addEventListener("mouseleave",()=>{
    console.log("mouse leave event occured!!")
})