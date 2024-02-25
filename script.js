document.addEventListener("DOMContentLoaded", function() {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  function createTodoItem(task) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerHTML = `
      <input type="checkbox" class="checkbox">
      <span class="task">${task}</span>
      <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(li);
  }

  function addTodoItem(event) {
    event.preventDefault();
    const task = todoInput.value.trim();
    if (task !== "") {
      createTodoItem(task);
      todoInput.value = "";
    }
  }

  function deleteTodoItem(event) {
    if (event.target.classList.contains("delete-btn")) {
      const item = event.target.parentElement;
      item.remove();
    }
  }

  todoForm.addEventListener("submit", addTodoItem);

  todoList.addEventListener("click", deleteTodoItem);
});

function showPromptBox() {
  const promptBox = document.getElementById("prompt-box");
  promptBox.style.display = "block";
}

function hidePromptBox() {
  const promptBox = document.getElementById("prompt-box");
  promptBox.style.display = "none";
}
