let eye = document.getElementById("eye");
let hidden = document.getElementById("hidden");
let input = document.querySelector("input");
eye.addEventListener("click", function () {
  eye.style.visibility = "hidden";
  hidden.style.visibility = "visible";
  input.type = "text";
});
hidden.addEventListener("click", function () {
  hidden.style.visibility = "hidden";
  eye.style.visibility = "visible";
  input.type = "password";
});
