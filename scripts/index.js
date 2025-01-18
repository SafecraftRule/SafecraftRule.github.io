//Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

//Die firebase variablen
let config;
let app;
let auth;

fetch("../config/config.json")
  .then((response) => response.json()) // Antwort als JSON parsen
  .then((firebaseConfig) => {
    //Firebase konfigurationen
    config = firebaseConfig;
    app = initializeApp(config);
    auth = getAuth(app);

    if (!firebaseConfig) {
      throw new Error("Firebase-Konfiguration nicht gefunden");
    }
    console.log("Firebase erfolgreich initialisiert!");
  })
  .catch((error) => {
    console.error(
      "Fehler beim Laden oder Initialisieren von Firebase: ",
      error
    );
  });
