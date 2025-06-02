const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if(inputBox.value === '') {
        alert("You must write a task!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = `<img src="images/cross1.png" alt="Delete" class="delete-icon">`
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN" || (e.target.tagName === "IMG" && e.target.parentElement.tagName === "SPAN")) {
        e.target.closest("li").remove();
        saveData();
    }
}, false);

listContainer.addEventListener("dblclick", function(e) {
    if (e.target.tagName === "LI") {
        let li = e.target;
        let currentText = li.childNodes[0].nodeValue.trim();

        let input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        input.className = "edit-input";

        li.innerHTML = "";
        li.appendChild(input);
        input.focus();

        input.addEventListener("blur", saveEdit);
        input.addEventListener("keydown", function(ev) {
            if (ev.key === "Enter") input.blur();
        });

        function saveEdit() {
            if (input.value.trim() !== "") {
                li.innerHTML = input.value;
                let span = document.createElement("span");
                span.innerHTML = `<img src="images/cross1.png" alt="Delete" class="delete-icon">`;
                li.appendChild(span);
                saveData();
            } else {
                li.remove(); 
                saveData();
            }
        }
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();