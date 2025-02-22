// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  signOut,
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  doc,
  getDoc,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzlPAwOZ_qnrEBrfA4-zAKe-SuWWXHu4I",
  authDomain: "safecraftrule-f4add.firebaseapp.com",
  projectId: "safecraftrule-f4add",
  storageBucket: "safecraftrule-f4add.firebasestorage.app",
  messagingSenderId: "1049235443546",
  appId: "1:1049235443546:web:c16de3021f7bb4df016d63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//Buttons
const logoutbtn = document.getElementById("logoutbtn");

//Textfields
const usernamefield = document.getElementById("username");

var uservar;

document.addEventListener("DOMContentLoaded", async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uservar = user;
    } else {
      if (!window.location.href.match("login.html")) {
        console.log("Nicht eingeloggt.");

        window.location.href = "login.html";
      } // Nutzer ist nicht eingeloggt
    }
  });
});

const docRef = doc(db, "users", "test123");
const docSnap = await getDoc(docRef);
console.log("UID: " + uservar.uid);

if (docSnap) {
  usernamefield.innerHTML = "Willkommen, " + docSnap.data().username;
} else {
  console.log("Fehler!");
}

logoutbtn.addEventListener("click", function () {
  signOut(auth)
    .then(() => {
      window.location.href = "login.html"; // Weiterleitung zur Login-Seite
    })
    .catch((error) => {
      console.error("Fehler beim Abmelden:", error);
    });
});
