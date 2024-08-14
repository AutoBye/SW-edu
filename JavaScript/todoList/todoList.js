const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "Todos";

let todos = [];

function deleteTodo(event) {
    //console.log("delete");
    //console.log(event);
    //console.log(event.target);
    //console.dir(event.target.parentElement);
    const li = event.target.parentElement;
    //console.log(li.id);
    li.remove();

    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    saveTodos();
}



function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;
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
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    //todos.push(newTodo);
    todos.push(newTodoObj);
    //paintTodo(newTodo);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(element => {
        paintTodo(element);
    });
}

