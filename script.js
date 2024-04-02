"use strict"

let inputEl = document.querySelector("input");
let submitBtn = document.querySelector(".submitBtn");
let listEl = document.querySelector("ul");
let clearBtn = document.querySelector(".clearBtn");


const toDoList = () => {

    let task = inputEl.value;
    const liEl = document.createElement("li");  // <li></li>


    const spanTag = document.createElement("span")   // <span></span>
    spanTag.innerHTML = task;  // <span>Gym</span>

    const checkBtn = document.createElement("button")
    checkBtn.innerHTML = "☑️"
    checkBtn.addEventListener("click", function () {
        spanTag.classList.toggle("checked")
    })

    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "🗑️"
    deleteBtn.addEventListener("click", function (){
        liEl.remove()
    })

    const divEl = document.createElement("div")

    divEl.appendChild(checkBtn)
    divEl.appendChild(deleteBtn)


    liEl.appendChild(spanTag)
    liEl.appendChild(divEl)

    listEl.appendChild(liEl)


    inputEl.value = ""
}


const clearItems = () => {
    listEl.innerHTML = ""

}





submitBtn.addEventListener("click", toDoList);
clearBtn.addEventListener("click", clearItems);

