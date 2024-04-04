const todoForm=document.querySelector(".form-todo")
const todoinput=document.querySelector(".form-todo input[type='text']");
const todolist=document.querySelector(".todo-list");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newtodotext=todoinput.value;
    const newLi=document.createElement("li");
    const newLiInnerHtml=`<span class="text">${newtodotext}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML=newLiInnerHtml;
    todolist.append(newLi);
    todoinput.value="";
})

todolist.addEventListener("click",(e)=>{
  if(e.target.classList.contains("done")){
    const lispan=e.target.parentNode.previousElementSibling;
    lispan.style.textDecoration="line-through";
  }
  if(e.target.classList.contains("remove")){
    const targatedli=e.target.parentNode.parentNode;
    targatedli.remove();
  }
})