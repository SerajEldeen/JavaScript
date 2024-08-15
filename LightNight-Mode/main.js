let sun = document.getElementById("sun");
let moon = document.getElementById("moon");

function setDarkMode() {
  document.body.style.backgroundColor = "black";
  sun.style.visibility = "visible";
  moon.style.visibility = "hidden";
  sun.style.backgroundColor = "white";
  localStorage.setItem("theme", "dark");
}

function setLightMode() {
  document.body.style.backgroundColor = "white";
  moon.style.visibility = "visible";
  sun.style.visibility = "hidden";
  localStorage.setItem("theme", "light");
}

moon.addEventListener("click", setDarkMode);
sun.addEventListener("click", setLightMode);

window.addEventListener("load", function () {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    setDarkMode();
  } else {
    setLightMode();
  }
});
