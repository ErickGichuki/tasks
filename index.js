//Add DOM content loaded to ensure that HTML will be loaded and parsed before js is executed
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form");
    const todoInput = document.getElementById("todo");
    const todoList = document.querySelector(".toDolist");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        addTodo();
    });

    function addTodo() {
        const todoText = todoInput.value.trim();

        if (todoText !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = todoText;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "X";
            deleteButton.classList.add("delete-button");

            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);

            todoInput.value = "";

            deleteButton.addEventListener("click", function() {
                todoList.removeChild(listItem);
            });
        }
    }
});