const url="https://jsonplaceholder.typicode.com/posts";
const xhr=new XMLHttpRequest();
// console.log(xhr);
//step1
xhr.open("GET",url);

// xhr.onreadystatechange=function(){
//     // console.log(xhr)
//     if(xhr.readyState==4){
//         const response=xhr.response;
//         const data=JSON.parse(response);
//         console.log(data);
//     }
// }

//another way to do this upper code
// xhr.onload =function(){
//     console.log(xhr.readyState)
// }


//error handling
xhr.onload=()=>{
    if(xhr.status>=200 && xhr.status<300){
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
    else{
        console.log("something went wrong")
    }
}

xhr.onerror=()=>{
    console.log("network error")
}
xhr.send();






