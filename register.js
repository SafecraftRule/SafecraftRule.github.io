// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
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

// Login-Funktion
document
  .getElementById("registerForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

    // Standart Doc Data
    const docData = {
      role: "user",
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      pro: false,
      username: document.getElementById("username").value,
    };

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential;

        setDoc(doc(db, "users", user.user.uid), docData);
        setTimeout(function () {
          window.location.href = "index.html"; // Weiterleitung zur Hauptseite
        }, 1500);
      })
      .catch((error) => {
        console.error("Fehler beim Login:", error.message);
      });
  });
