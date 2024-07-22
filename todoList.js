let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something');
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = "\u00d7";
        li.appendChild(deleteBtn);

    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem("task", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("task");
}

showTask();
