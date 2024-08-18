let cells = document.querySelectorAll(".cell");
let statusText = document.getElementById("statusText");
let restartBtn = document.getElementById("restartBtn");
let winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let options = ["", "", "", "", "", "", "", "", ""];
let Xturn = true;

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (cell.innerHTML === "") {
      cell.innerHTML = Xturn ? "X" : "O";
      if (cell.innerHTML === "X") {
        cell.style.color = "red";
        cell.style.boxShadow = "none";
        options[index] = cell.innerHTML;
        Xturn = !Xturn;
        checkWinner();
      } else {
        cell.style.color = "blue";
        cell.style.boxShadow = "none";
        options[index] = cell.innerHTML;
        Xturn = !Xturn;
        checkWinner();
      }
    }
  });
});
function checkWinner() {
  for (let i = 0; i < winningCondition.length; i++) {
    const [a, b, c] = winningCondition[i];
    if (options[a] && options[a] === options[b] && options[a] === options[c]) {
      statusText.innerHTML = `${options[a]} Wins!`;
      if (options[a] === "X") {
        statusText.style.color = "red";
      } else {
        statusText.style.color = "blue";
      }
      cells.forEach((cell) => (cell.style.pointerEvents = "none"));
      return;
    }
  }

  if (!options.includes("")) {
    statusText.innerHTML = "Draw!";
    statusText.style.color = "Purple";
  }
}
restartBtn.addEventListener("click", () => {
  options = ["", "", "", "", "", "", "", "", ""];
  Xturn = true;
  statusText.innerHTML = "";
  cells.forEach((e) => {
    e.innerHTML = "";
    e.style.pointerEvents = "auto";
    e.style.boxShadow = "0 0 2px black";
  });
});
