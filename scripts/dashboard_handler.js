const logoutbtn = document.getElementById("logoutbtn");
const userfield = document.getElementById("userh1");
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import {
  getFirestore,
  getDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    userfield.innerHTML = docSnap.data().username;
  } else {
    window.location.href = "../index.html";
  }
});

logoutbtn.addEventListener("click", async function () {
  function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let verfällt = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${verfällt}; path=/`;
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

  function deleteCookie(name) {
    setCookie(name, null, null);
  }

  deleteCookie("user");
  location.reload();
});
