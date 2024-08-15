let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let grey = document.querySelector(".grey");
let section = document.querySelector("section");
function updateColor(color) {
  section.style.backgroundColor = color;
  localStorage.setItem("backgroundColor", color);
}
red.addEventListener("click", function () {
  section.style.backgroundColor = "red";
  updateColor("red");
});

green.addEventListener("click", function () {
  section.style.backgroundColor = "green";
  updateColor("green");
});

blue.addEventListener("click", function () {
  section.style.backgroundColor = "blue";
  updateColor("blue");
});

grey.addEventListener("click", function () {
  section.style.backgroundColor = "grey";
  updateColor("grey");
});
window.addEventListener("load", function () {
  let saved = this.localStorage.getItem("backgroundColor");
  if (saved) {
    section.style.backgroundColor = saved;
  }
});
