let buttons = document.querySelectorAll("button");
let input = document.querySelector(".calculator-screen");

window.addEventListener("load", function () {
  const savedValue = localStorage.getItem("calculatorInput");
  if (savedValue) {
    input.value = savedValue;
  }
});
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.innerHTML === "Del") {
      input.value = input.value.slice(0, -1);
    } else if (button.innerHTML === "AC") {
      input.value = input.value.slice(0, 0);
    } else if (button.innerHTML === "=") {
      try {
        let result = input.value.replace(/%/g, "/100");
        input.value = eval(result);
      } catch (Error) {
        input.value = "Error";
      }
    } else {
      input.value += button.innerHTML;
    }
    localStorage.setItem("calculatorInput", input.value);
  });
});
