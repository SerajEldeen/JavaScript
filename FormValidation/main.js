let myName = document.querySelector(".fullName");
let phone = document.querySelector(".phoneNo");
let email = document.querySelector(".email");
let txtMessage = document.querySelector(".message");
let butt = document.querySelector("button");
let nameErr = document.getElementById("nameError");
let phoneErr = document.getElementById("phoneError");
let emailErr = document.getElementById("emailError");
let txtErr = document.getElementById("txtMessageError");

butt.addEventListener("click", function (e) {
  let hasError = false;

  if (myName.value === "") {
    nameErr.style.display = "block";
    hasError = true;
  } else {
    nameErr.style.display = "none";
  }
  if (phone.value === "") {
    phoneErr.style.display = "block";
    hasError = true;
  } else {
    phoneErr.style.display = "none";
  }

  if (email.value === "") {
    emailErr.style.display = "block";
    hasError = true;
  } else {
    emailErr.style.display = "none";
  }

  if (txtMessage.value === "") {
    txtErr.style.display = "block";
    hasError = true;
  } else {
    txtErr.style.display = "none";
  }

  if (hasError) {
    e.preventDefault();
  }
});
