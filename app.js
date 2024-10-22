const todoInp = document.getElementById("todo-input");
const addBtn = document.getElementById("add-todo");
const list = document.getElementById("list");
let todo;

const todos = JSON.parse(localStorage.getItem("todo")) || [];
localStorage.setItem("todo", JSON.stringify(todos));

function addTodo() {
  todo = todoInp.value.trim();

  if (todo) {
    createTodo(todo);

    todoInp.value = "";

    saveTodo();
  } else {
    alert("Please enter a task!");
  }
}

addBtn.addEventListener("click", addTodo);

function createTodo() {
  const listItem = document.createElement("li");

  listItem.textContent = todo;

  const delBtn = document.createElement("button");

  delBtn.textContent = "Delete";

  delBtn.className = "del-todo";

  listItem.appendChild(delBtn);

  list.appendChild(listItem);

  delBtn.addEventListener("click", function () {
    list.removeChild(listItem);
    saveTodo();
  });
}

function saveTodo() {
  let todos = [];
  list.querySelectorAll("li").forEach(function (item) {
    todos.push(item.textContent.replace("Delete", "").trim());
  });

  localStorage.setItem("todo", JSON.stringify(todos));
}

// function loadTodo() {
//   const todos = JSON.parse(localStorage.getItem("todo")) || [];

//   // todos.forEach(createTodo);

// }
