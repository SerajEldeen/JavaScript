let btn = document.querySelector("button");
let calculator = document.querySelector(".calculator");
btn.addEventListener("click", calculateAge);
function calculateAge() {
  const input = document.querySelector("input");
  const previousResult = document.querySelector(".result");
  if (previousResult) {
    previousResult.remove();
  }
  if (input && input.value) {
    const birthday = new Date(input.value);
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const month = today.getMonth() - birthday.getMonth();
    const day = today.getDate() - birthday.getDate();

    let p = document.createElement("p");
    p.className = "result";
    p.innerHTML = `Your Age is <span>${age}</span> Years, <span>${month}</span> Months, and <span>${day}</span> Days.`;
    calculator.appendChild(p);
  }
}
