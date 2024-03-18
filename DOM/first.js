"use strict"
// console.dir(document)

//select element using get element by id
// console.log(typeof document.getElementById("main-heading"))

const main=document.getElementById("main-heading")


//query selector

const head=document.querySelector("#main-heading")
console.log(head)

//queryselector all
const navitem=document.querySelectorAll(".nav-item")
console.log(navitem)


//changing the text
const mainheading=document.getElementById("main-heading")
//this will give all the data content
console.log(mainheading.textContent)
//this will give only the displayed data content
console.log(mainheading.innerText)
mainheading.textContent="Align the work as u need";
console.log(mainheading.textContent)
// console.log(mainheading)



//change the styles of content

const mainh=document.querySelector("div.headline h2")
console.log(mainh.style);
mainh.style.backgroundColor="black";
mainh.style.color="grey";
mainh.style.border="20px solid blue"
