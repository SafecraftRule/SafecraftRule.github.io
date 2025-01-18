const registerbtn = document.getElementById("registerbtn");
const closediabtn = document.getElementById("closedialog");
const submitbtn = document.getElementById("registerbtn1");
const usernamefield = document.getElementById("usernameinput");
const emailfield = document.getElementById("emailinput");
const passwordfield = document.getElementById("passwordinput");
const errordia = document.getElementById("error");
const loginbtn = document.getElementById("loginbtn");
const logindiabtn = document.getElementById("loginbtn1");
const registerinfodia = document.getElementById("registerinfo");
const logindia = document.getElementById("logindia");

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

logindiabtn.addEventListener("click", function (event) {
  registerinfodia.showModal();
  logindiabtn.disabled = true;
  logindiabtn.innerHTML = "Bitte warten...";
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
  function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let verfällt = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${verfällt}; path=/`;
  }
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const email = document.getElementById("emailinputlogin").value;
  const password = document.getElementById("passwordinputlogin").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      setCookie("uid", user.uid, 30);
      setCookie("user", user, 30);
      window.location.href = "../seiten/dashboard.html";
    })
    .catch((error) => {
      registerinfodia.close();
      errordia.showModal();
      setTimeout(function () {
        logindiabtn.disabled = false;
        logindiabtn.innerHTML = "Login";
        errordia.close();
      }, 2000);
      console.log(error.code);
    });
});

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

if (getCookie("user")) {
  console.log("Benutzer ist bereits eingeloggt...");
  window.location.href = "../seiten/dashboard.html";
}

function showDialog() {
  const dialog = document.getElementById("registerdia");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  dialog.showModal();
}

submitbtn.addEventListener("click", function (event) {
  submitbtn.disabled = true;
  submitbtn.innerHTML = "Bitte warten...";
  const email1 = emailfield.value;
  const password1 = passwordfield.value;
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
    const db = getFirestore(app);
    createUserWithEmailAndPassword(auth, email1, password1)
      .then(async (userCredential) => {
        registerinfodia.close();
        const user = userCredential.user;
        var ref = doc(db, "users", userCredential.user.uid);
        await setDoc(ref, {
          username: username,
          password: password,
          email: email,
          isAdmin: false,
        });
        setCookie("uid", user.uid, 30);
        setCookie("user", user, 30);
        window.location.href = "../index.html";
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
