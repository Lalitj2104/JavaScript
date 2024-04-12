"use strict"
const url="https://jsonplaceholder.typicode.com/posts";

// fetch(url)
// .then(response=>{
//     if(response.ok)
//     return response.json();
// else{
//     throw new Error("something went wrong")
// }
// })
// .then(data =>{
//     console.log(data)
// })
// .catch(error =>{
//     console.log("something went wrong")
// })

//frtch :post method
fetch(url ,{
   method : 'POST',
   body: JSON.stringify({
    title:'hello',
    body: 'how r u?',
    userId: 1,
}),
headers:{
    'content-type': 'application/json;charset =UTF-8',

},
})
.then(response =>{
    if(response.ok){
        return response.json();
    }
    else{
        throw new Error("something went wrong")
    }
})
.then(data=>{
    console.log(data);
})
.catch(error =>{
        console.log("something went wrong")
    })