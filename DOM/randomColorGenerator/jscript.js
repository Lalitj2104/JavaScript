"use strict"

const mainButton= document.querySelector("button");
const body=document.body;
const currentcolor=document.querySelector(".current-color");
// console.log(currentcolor);
function randomc(){
    const red=Math.floor(Math.random() *256);
    const green=Math.floor(Math.random() *256);
    const blue=Math.floor(Math.random() *256);
    const randomColor=`rgb(${red},${green},${blue})`;
    return  randomColor;
}

mainButton.addEventListener("click",()=>{
    const randomcol=randomc();
    body.style.backgroundColor=randomcol;
    currentcolor.textContent=randomcol
})