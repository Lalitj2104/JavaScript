"use strict"

const btn = document.querySelector(".btn-headline");
// console.log(btn)
// btn.onclick = function () { console.log('You clicked me') }

// Method   addeventlistener


function clickme() { console.log('You clicked me') }
btn.addEventListener("click",clickme);

 

//event object