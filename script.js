"use strict"

let inputEl = document.querySelector("input");
let submitBtn = document.querySelector(".submitBtn");
let clearAllBtn = document.querySelector(".clearBtn");
let listEl = document.querySelector("ul");





const toDoList = () => {
    // create a new task (li) item


    const liEL = document.createElement('li')
    liEL.innerText = inputEl.value;

    listEl.appendChild(liEL)

}


const clearItems = () => {

}




submitBtn.addEventListener("click", toDoList);
clearAllBtn.addEventListener("click", clearItems);