let rightArrow = document.querySelector(".next");
let leftArrow = document.querySelector(".back");
let galleryBox = document.querySelector(".gallery");
rightArrow.addEventListener("click", function () {
  galleryBox.scrollLeft += galleryBox.clientWidth; //Scroll to the Right
});

leftArrow.addEventListener("click", function () {
  galleryBox.scrollLeft -= galleryBox.clientWidth; //Scroll to  the Left
});
