//Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

fetch("../config/config.json")
  .then((response) => response.json()) // Antwort als JSON parsen
  .then((firebaseConfig) => {
    // Firebase initialisieren
    if (!firebaseConfig) {
      throw new Error("Firebase-Konfiguration nicht gefunden");
    }

    // Firebase mit der geladenen Konfiguration initialisieren
    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);
    console.log("Firebase erfolgreich initialisiert");
  })
  .catch((error) => {
    console.error("Fehler beim Laden oder Initialisieren von Firebase:", error);
  });
