const registerbtn = document.getElementById("registerbtn");
const closediabtn = document.getElementById("closedialog");
const submitbtn = document.getElementById("registerbtn1");
const usernamefield = document.getElementById("usernameinput");
const emailfield = document.getElementById("emailinput");
const passwordfield = document.getElementById("passwordinput");
const errordia = document.getElementById("error");
const loginbtn = document.getElementById("loginbtn");
const logibdiabtn = document.getElementById("loginbtn1");
const registerinfodia = document.getElementById("registerinfo");
const logindia = document.getElementById("logindia");
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import {
  db,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

loginbtn.addEventListener("click", function (event) {
  event.preventDefault();
  logindia.showModal();
});

registerbtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("registerdia").showModal();
});

closediabtn.addEventListener("click", function (event) {
  const dialog = document.getElementById("registerdia");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  dialog.close();
});

document
  .getElementById("closedialog1")
  .addEventListener("click", function (event) {
    const dialog2 = document.getElementById("logindia");
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    dialog2.close();
  });

function showDialog() {
  const dialog = document.getElementById("registerdia");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  dialog.showModal();
}

submitbtn.addEventListener("click", function (event) {
  submitbtn.disabled = true;
  submitbtn.innerHTML = "Bitte warten...";
  const email = emailfield.value;
  const password = passwordfield.value;
  const username = usernamefield.value;
  //Benutzer registrieren
  try {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDw4AER-2QegAwnGv5nKA90F4NakYV5WX8",
      authDomain: "safecraftrule.firebaseapp.com",
      databaseURL:
        "https://safecraftrule-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "safecraftrule",
      storageBucket: "safecraftrule.firebasestorage.app",
      messagingSenderId: "1012497982084",
      appId: "1:1012497982084:web:5753a59e81b50093d218d1",
    };

    //Cookies
    function setCookie(name, value, daysToLive) {
      const date = new Date();
      date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
      let verfällt = "expires=" + date.toUTCString();
      document.cookie = `${name}=${value}; ${verfällt}; path=/`;
    }

    function deleteCookie(name) {
      setCookie(name, null, null);
    }

    function getCookie(name) {
      const cDecoded = decodeURIComponent(document.cookie);
      const cArray = cDecoded.split("; ");
      let result = null;

      cArray.forEach((element) => {
        if (element.indexOf(name) == 0) {
          result = element.substring(name.length + 1);
        }
      });
      return result;
    }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        registerinfodia.close();
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        registerinfodia.close();
        errordia.showModal();
        setTimeout(function () {
          submitbtn.disabled = false;
          submitbtn.innerHTML = "Registrieren";
          errordia.close();
          registerinfodia.close();
        }, 2000);
      });
    registerinfodia.showModal();
  } catch (error) {
    console.log(error);

    errordia.showModal();
    setTimeout(function () {
      submitbtn.disabled = false;
      submitbtn.innerHTML = "Registrieren";
      errordia.close();
    }, 2000);
  }
});
