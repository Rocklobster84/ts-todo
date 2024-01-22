"use strict";
// non null assertion operator !
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
// Create variable of todos of interface Todo[] whose value comes from the readTodos function
const todos = readTodos();
// Loop through all items in the todo array and run the createTodo function
todos.forEach(createTodo);
// Function to readTodos of interface Todo[] from local storage. If there are no todos in local storage then an empty array will be returned. Last line parses items from JSON objects
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
// Function to saveTodos to local storage and converts them to a JSON string
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
// function to add todos when button is clicked
function handleSubmit(e) {
    e.preventDefault();
    // creates new todo's of interface Todo
    const newTodo = {
        text: input.value,
        completed: false,
    };
    //Runs createTodo function and then pushes to newTodo array
    createTodo(newTodo);
    todos.push(newTodo);
    // Save todo to list
    saveTodos();
    // Resets input to empty
    input.value = "";
}
// Function to add li elements to the ul along with a checkbox.
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    // Specifies that the checkbox elements should have type=checkbox
    checkbox.type = "checkbox";
    // Sets the true/false value of checkbox based on what is in local storage
    checkbox.checked = todo.completed;
    //Checks off/on box and saves boolean value to local storage for each corresponding item
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    // Creates new li item with the value of the text entered
    newLI.append(todo.text);
    // Same addition with empty or false checkbox
    newLI.append(checkbox);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
//btn.addEventListener("click", function (){
//  alert(input.value);
// input.value="";
//});
