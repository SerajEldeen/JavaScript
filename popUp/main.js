let butt1 = document.querySelector(".ok");
let butt2 = document.querySelector(".submit");
let popUp = document.querySelector(".popup");
butt2.addEventListener("click", function () {
  popUp.style.display = "block";
  popUp.style.transition = "transform 0.4s, top 0.4s";
  butt2.style.display = "none";
});
butt1.addEventListener("click", function () {
  popUp.style.display = "none";
  butt2.style.display = "block";
});
