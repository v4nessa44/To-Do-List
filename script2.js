"use strict"

let inputEl = document.querySelector("input");
let submitBtn = document.querySelector(".submitBtn");
let listEl = document.querySelector("ul");
let clearBtn = document.querySelector(".clearBtn");


const toDoList = () =>{
    
    let task = inputEl.value; 
    const liEl = document.createElement("li"); //<li><li>
    liEl.innerHTML = task; //<li>Gym</li>

    const spanTag = document.createElement("span"); //<span></span>
    spanTag.innerHTML= task; //<span>Gym</span>

    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = "";
    checkBtn.addEventListener("click", function(){
        spanTag.classList.toggle("checked")
    })

    const deletebtn = document.createElement("button");
    deletebtn.innerHTML = ""; 
    deletebtn.addEventListener("click", function(){
        liEl.remove()
    })

    const divEl = document.createElement("div")
    divEl.appendChild(checkBtn);
    divEl.appendChild(deletebtn);

    
    liEl.appendChild(spanTag);
    liEl.appendChild(divEl);
    listEl.appendChild(liEl);  // we are adding another child of the container <li>Study</li>, <li>Read</li>
}





const clearItems = () => {
    listEl.innerHTML = ""
}




submitBtn.addEventListener("click", toDoList);
clearBtn.addEventListener("click", clearBtn);