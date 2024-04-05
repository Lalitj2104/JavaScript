"use strict"

const body=document.body;

const x=setInterval(() => {
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const rgb=`rgb(${red},${green},${blue})`;
    body.style.background=rgb;
},100);

const button=document.querySelector("button");
button.addEventListener("click",()=>{
    clearInterval(x);
    button.textContent=body.style.background;
})