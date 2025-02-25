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
  apiKey: "AIzaSyANlfg-P2eTCNCMQhqBnKzQe9aTLb500ns",
  authDomain: "safecraftrule-1b9bf.firebaseapp.com",
  projectId: "safecraftrule-1b9bf",
  storageBucket: "safecraftrule-1b9bf.firebasestorage.app",
  messagingSenderId: "618391522859",
  appId: "1:618391522859:web:e434d31b22d35325c6246e",
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
