let form = document.forms[0];
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let showPass = document.getElementsByClassName("fa-eye")[0];
let hiddePass = document.getElementsByClassName("fa-eye-slash")[0];

form.onsubmit = function (e) {
  e.preventDefault();
  chechInputs();
};

function chechInputs() {
  if (firstName.value == "") {
    setErrorFor(firstName, "First Name cannot be empty");
  } else {
    setSuccessFor(firstName);
  }
  if (lastName.value == "") {
    setErrorFor(lastName, "Last Name cannot be empty");
  } else {
    setSuccessFor(lastName);
  }
  if (email.value == "") {
    setErrorFor(email, "Email cannot be empty");
  } else if (!validEmail(email.value)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  if (password.value == "") {
    setErrorFor(password, "Password cannot be empty");
  } else if (!validPassword(password.value)) {
    setErrorFor(
      password,
      "Password Should have 1 lowercase letter, 1 uppercase letter, 1 special character, 1 number, and be at least 8 characters long"
    );
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  input.parentElement.classList.add("not-accept");
  input.parentElement.classList.remove("accept");
  let small = input.parentElement.querySelector("small");
  small.textContent = message;
}
function setSuccessFor(input) {
  input.parentElement.classList.add("accept");
  input.parentElement.classList.remove("not-accept");
}
function validEmail(email) {
  return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(email);
}
function validPassword(password) {
  return /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/.test(
    password
  );
}

password.oninput = function () {
  if (password.value.lenght == 0) {
    showPass.style.display = "none";
  }
  showPass.style.display = "block";
};
showPass.onclick = function () {
  password.setAttribute("type", "text");
  this.style.display = "none";
  hiddePass.style.display = "block";
};
hiddePass.onclick = function () {
  password.setAttribute("type", "password");
  this.style.display = "none";
  showPass.style.display = "block";
};
