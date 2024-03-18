"use strict"
// getters
const link=document.querySelector("a");
console.log(link.getAttribute("href").slice(1))
//for slicing the value or content


const inpute=document.querySelector(".form-todo input");
console.log(inpute.getAttribute("type"));


//setters
link.setAttribute("href","index.html");
console.log((link.getAttribute("href"))) 





// multiple elements using the tag name

const navitems=document.getElementsByTagName("a");

for(let x of navitems){
    // console.log(x)
    x.style.backgroundColor="grey";
    x.style.color="black";
    x.style.fontWeight="bold";
}

//same we can do this with simple for loop

//if we want to use forEach loop we have to first change this array like object to array
console.log(Array.isArray(navitems))
const navItems= Array.from(navitems)
console.log(Array.isArray(navItems))

navItems.forEach((x)=>{
    x.style.backgroundColor="blue";
    x.style.color="black";
    x.style.fontWeight="bold";
})



//innerhtml use
const inhtml=document.querySelector(".headline");
inhtml.innerHTML="<h2>heloo this done using js</h2>"
inhtml.innerHTML+="<button class=\"btn\">learn more</button>"
console.log(inhtml.innerHTML)



//selection of all classes in a div
 const todo=document.querySelector(".section-todo");
 console.log(todo.classList)
 todo.classList.add("bg-dark") 