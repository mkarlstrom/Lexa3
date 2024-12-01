console.log("Todo -list.js");

let todo = document.querySelector("#todo");
let add = document.querySelector("#add");
let todos = document.querySelector("#todos");
let todoCount = document.querySelector("#todo-count");

add.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText = todo.value;
    todos.appendChild(li);
    todo.value = ""; 

    let span = document.createElement("span");
    span.innerText = "[Tryck här när du är klar]";
    li.appendChild(span);

    span.addEventListener("click", function(){
        
        span.innerText = "[klar]"; 
        todoCount.innerText = "Todos count: " + todos.children.length;

    })
    todoCount.innerText = "Todos count: " + todos.children.length;
})