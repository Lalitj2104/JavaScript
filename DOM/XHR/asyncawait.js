"use strict"
const url="https://jsonplaceholder.typicode.com/posts";

async function getPosts(){
    const response=await fetch(url);
    if(!response.ok){
        throw new Error("error")
    }
    const data=await response.json()
    return data;
}

getPosts()
    .then(data=>{
        console.log(data);
    })
    .catch (error=>{
        console.log("something went wrong")
    })
