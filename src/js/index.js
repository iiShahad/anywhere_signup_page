require("../css/style.css");

// 🐾🐾🐾🐾🐾🐾 FIREBASE SETUP 🐾🐾🐾🐾🐾🐾
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// //init firebase app
// initializeApp(firebaseConfig);

// //init firebase services
// const auth = getAuth();

// 🐾🐾🐾🐾🐾🐾 VARIABLES 🐾🐾🐾🐾🐾🐾
const form = document.querySelector(".form");
const inputContainers = document.querySelectorAll(".input-container");
const togglePass = document.querySelector(".visibility");
const closeBtn = document.querySelector(".close");
const openBtn = document.querySelector(".menu");
const navbar = document.querySelector("#nav");
const fname = form.firstname;
const lname = form.lastname;
const email = form.email;
const password = form.password;

let fnameValid = true;
let lnameValid = true;
let emailValid = true;
let passwordValid = true;

// 🐾🐾🐾🐾🐾🐾 IMPLEMENTATION 🐾🐾🐾🐾🐾🐾
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const enteredEmail = email.value;
  const enteredName = fname.value + lname.value;
  if (fnameValid && lnameValid && emailValid && passwordValid) {
    // createUserWithEmailAndPassword(auth, enteredEmail, enteredName)
    //   .then((cred) => {
    //     alert("user created");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
});

//validate first name
fname.addEventListener("keyup", (e) => {
  if (e.target.value.trim().length < 3) {
    addError(fname, "Name should not be less than 3");
    fnameValid = false;
  } else {
    removeError(fname);
    fnameValid = true;
  }
});

//validate last name
lname.addEventListener("keyup", (e) => {
  if (e.target.value.trim().length < 3) {
    addError(lname, "Name should not be less than 3");
    lnameValid = false;
  } else {
    removeError(lname);
    lnameValid = true;
  }
});

//validate email
email.addEventListener("keyup", (e) => {
  if (!validateEmail(email)) {
    addError(email, "Email is not correct");
    emailValid = false;
  } else {
    removeError(email);
    emailValid = true;
  }
});

//validate password
password.addEventListener("keyup", (e) => {
  if (password.value.length < 8) {
    addError(password, "Password is less than 8 characters");
    passwordValid = false;
  } else {
    removeError(password);
    passwordValid = true;
  }
});

//search the correct element to add error
const addError = (child, msg) => {
  inputContainers.forEach((container) => {
    if (container.contains(child)) {
      container.classList.add("error");
      container
        .querySelector(".input")
        .querySelector(".label")
        .classList.add("error-label");

      container.querySelector(".error-msg").innerText = msg;
    }
  });
};

//toggle password
togglePass.addEventListener("click", (e) => {
  password.type = password.type === "password" ? "text" : "password";
});

//close navbar on mobile view
closeBtn.addEventListener("click", (e) => {
  navbar.classList.toggle("open__navbar");
});
//open navbar on mobile view
openBtn.addEventListener("click", (e) => {
  navbar.classList.toggle("open__navbar");
});

// 🐾🐾🐾🐾🐾🐾 USED FUNCTIONS 🐾🐾🐾🐾🐾🐾
//search the correct element to remove error
const removeError = (child) => {
  inputContainers.forEach((container) => {
    if (container.contains(child)) {
      container.classList.remove("error");
      container
        .querySelector(".input")
        .querySelector(".label")
        .classList.remove("error-label");

      container.querySelector(".error-msg").innerText = "";
    }
  });
};

//validate email
function validateEmail(email) {
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(String(email.value).toLowerCase());
}
