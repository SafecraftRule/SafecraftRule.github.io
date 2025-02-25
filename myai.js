// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  doc,
  getDoc,
  updateDoc,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
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
const db = getFirestore(app);
const auth = getAuth(app);

var fieldValue;

async function readField() {
  const docRef = doc(db, "users", auth.currentUser.uid); // Ersetze mit deiner Sammlung und Dokument-ID
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    fieldValue = docSnap.data().myaikey; // Ersetze mit dem Namen des Feldes, das du lesen möchtest
    console.log("KEY: ", fieldValue);
  } else {
    console.log("Dokument existiert nicht!");
  }
}

readField();

document.getElementById("sendbtn").addEventListener("click", async function () {
  const userInput = document.querySelector(".non-dia").value;
  if (!userInput) return;
  readField();

  // Hier fügst du deinen OpenAI API Key ein und die Anfrage
  const apiKey = fieldValue; // Ersetze mit deinem API-Key
  const response = await fetch(
    "https://api.openai.com/v1/engines/davinci/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: userInput,
        max_tokens: 100,
      }),
    }
  );

  const data = await response.json();
  const generatedText = data.choices[0].text.trim();

  // Text im Container anzeigen
  document.getElementById("generatedText").innerText = generatedText;
  document.getElementById("generatedTextContainer").style.display = "block"; // Container anzeigen
});
