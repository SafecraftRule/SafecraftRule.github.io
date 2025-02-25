// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.info("Eingeloggt!");
    } else {
      if (!window.location.href.match("login.html")) {
        console.warn("Nicht eingeloggt.");

        window.location.href = "login.html";
      } // Nutzer ist nicht eingeloggt
    }
  });
});
