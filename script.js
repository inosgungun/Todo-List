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
}