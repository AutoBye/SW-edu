const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function deleteTodo(event) {
    //console.log("delete");
    //console.log(event);
    //console.log(event.target);
    //console.dir(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = newTodo;
    li.appendChild(span);

    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);

    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    //console.log(newTodo);
    paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);