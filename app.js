// function Addtodo() {
//   const todoInp = document.getElementById("todo-input");
//   const list = document.getElementById("todo-list");

//   if (!todoInp.value) {
//     alert("Please enter your todo");
//     return;
//   }

//   const newTodo = document.createElement("div");
//   const todoText = document.createElement("p");
//   todoText.innerHTML = todoInp.value;
//   newTodo.append(todoText);

//   newTodo.className = "todo-item";

//   const editBtn = document.createElement("button");
//   const deleteBtn = document.createElement("button");

//   editBtn.innerHTML = "Edit";
//   editBtn.setAttribute("onclick", "editTodo(this)");
//   newTodo.append(editBtn);

//   deleteBtn.innerHTML = "Delete";
//   deleteBtn.setAttribute("onclick", "deleteTodo(this)");
//   newTodo.append(deleteBtn);

//   list.append(newTodo);
//   todoInp.value = "";
// }

// function deleteTodo(deleteBtn) {
//   deleteBtn.parentElement.remove();
// }

// function editTodo(editBtn) {
//   const textEle = editBtn.previousElementSibling;

//   const editInp = document.createElement("input");
//   editInp.setAttribute("type", "text");
//   editInp.value = textEle.innerText;

//   textEle.className += "hide";

//   editBtn.parentElement.prepend(editInp);

//   editInp.addEventListener("blur", function () {
//     textEle.innerText = editInp.value;
//     textEle.className = textEle.className.replace("hide", "");
//     editInp.remove("");
//   });
// }
