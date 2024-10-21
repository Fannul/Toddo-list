//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(event) {
    //Prevents form from submitting
    event.preventDefault();
    
    //Creating a div container for the todo item and buttons
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create li element
    const newTodo = document.createElement("li");
    const todoValue = todoInput.value;
    console.log(todoValue);
    newTodo.innerHTML = todoValue;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Completed button
    const completedButton = document.createElement("button");
    completedButton.innerText = "Completed";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Trash button
    const trashButton = document.createElement("button");
    trashButton.innerText = "del";
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    //Append the whole todo div to the todo list
    todoList.appendChild(todoDiv);

    //Clear input value after adding todo
    todoInput.value = '';

    //Event listener for the completed button
    completedButton.addEventListener("click", function () {
        newTodo.style.color = 'grey';
        newTodo.style.textDecoration = 'line-through';
        completedButton.style.background = 'rgba(93, 93, 238, 0.87)';
        completedButton.style.textDecoration = 'line-through';
    });

    //Event listener for the delete button
    trashButton.addEventListener("click", function () {
        todoDiv.remove();  // Removes the entire div containing the todo item and buttons
    });
}
