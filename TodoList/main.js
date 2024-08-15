let butt = document.querySelector("button");
let input = document.getElementById("input-box");
let ul = document.getElementById("list-container");
function addTask() {
  if (input.value.trim() === "") {
    let li = document.createElement("li");
    li.textContent = "Nothing";
    li.style.color = "red";
    ul.appendChild(li);
    let span = document.createElement("span");
    li.appendChild(span);
  } else {
    let li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    let span = document.createElement("span");
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}
butt.addEventListener("click", addTask);
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});
function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}
window.addEventListener("load", function () {
  ul.innerHTML = this.localStorage.getItem("data");
});
