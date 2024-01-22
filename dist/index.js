"use strict";
// non null assertion operator
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function handleSubmit(e) {
    e.preventDefault();
    const newTodoText = input.value;
    const newLI = document.createElement("LI");
    newLI.append(newTodoText);
    list.append(newLI);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
//btn.addEventListener("click", function (){
//  alert(input.value);
// input.value="";
//});
