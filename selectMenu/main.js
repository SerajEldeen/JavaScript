let lowerArrow = document.querySelector(".lowerArrow");
let upperrArrow = document.querySelector(".upperArrow");
let list = document.getElementById("list");
lowerArrow.addEventListener("click", () => {
  list.style.display = "block";
  upperrArrow.style.display = "block";
  lowerArrow.style.display = "none";
});
upperrArrow.addEventListener("click", () => {
  list.style.display = "none";
  upperrArrow.style.display = "none";
  lowerArrow.style.display = "block";
});
