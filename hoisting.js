"user strict"

hello();
function hello(){
    console.log("hello world")
}

//function in function 

const app=()=>{
    const add=(x,z)=>console.log(x+z);
const multiply=(x,y)=>{
    console.log(x*y);
}
console.log("inside app")
add(5,4);
multiply(4,5);
}

app();