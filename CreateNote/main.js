let createButton = document.querySelector("button");
let container = document.querySelector(".notes-container");
window.addEventListener("load", () => {
  const savedNotes = localStorage.getItem("saveChanges");
  if (savedNotes) {
    container.innerHTML = savedNotes;
    const allNotes = container.querySelectorAll(".input-box");
    allNotes.forEach((note) => {
      note.contentEditable = true;
    });
  }
});

createButton.addEventListener("click", () => {
  let p = document.createElement("p");
  let inputImg = document.createElement("img");

  p.className = "input-box";
  p.contentEditable = true;

  inputImg.src = "images/delete-button.png";
  inputImg.className = "deleteImg";
  inputImg.contentEditable = false;

  container.appendChild(p).appendChild(inputImg);
  saveNotes();
});

container.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveNotes();
  }
});

function saveNotes() {
  localStorage.setItem("saveChanges", container.innerHTML);
}
