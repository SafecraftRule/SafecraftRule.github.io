const container = document.querySelector(".wrapper"); // Container für Span und Menü
const button = document.querySelector("#move-button"); // Button für Verschiebung

let isDragging = false; // Status, ob das Dragging aktiv ist

// Wenn der Button gedrückt wird
button.addEventListener("mousedown", (event) => {
  event.preventDefault();
  isDragging = true;
  container.style.position = "absolute"; // Stelle sicher, dass der Container absolute Positionierung hat
  container.style.cursor = "grabbing"; // Mauszeiger ändern
});

// Wenn die Maus bewegt wird
document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    // Mauskoordinaten nutzen, um den Container zu positionieren
    container.style.left = `${event.clientX}px`; // Mausposition auf der X-Achse
    container.style.top = `${event.clientY}px`; // Mausposition auf der Y-Achse
  }
});

// Wenn die Maustaste losgelassen wird
document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    container.style.cursor = "default"; // Mauszeiger zurücksetzen
  }
});

const changetxtdia = document.getElementById("changetextsup");
const updateTextButton = document.querySelector("#update-text-button");
const inputText = document.querySelector("#input-text");
const myTextSpan = document.querySelector("#my-text");
const closebtn = document.getElementById("closedialog");
const settingsbtntext = document.getElementById("settingstextbtn");
const removespanbtn = document.getElementById("removespanbtn");
const scalebtn = document.getElementById("scalebtn");
const scaleinput = document.getElementById("scale");
const colorinput = document.getElementById("colorborderspan");
const linebreakbtn = document.getElementById("linebreakbtn");
const linebreakinput = document.getElementById("linebreak");
const colorbtn = document.getElementById("bordercolorbtn");
const fontsizeinput = document.getElementById("fontsizeinput");
const fontsizebtn = document.getElementById("changefontsizebtn");

removespanbtn.addEventListener("click", function (event) {
  event.preventDefault();
  myTextSpan.remove();
});

closebtn.addEventListener("click", function (event) {
  event.preventDefault();
  changetxtdia.close();
});

settingsbtntext.addEventListener("click", function (event) {
  event.preventDefault();
  changetxtdia.showModal();
});

// Wenn der Button geklickt wird, den Text aus dem Eingabefeld übernehmen
updateTextButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newText = inputText.value; // Text aus dem Eingabefeld
  myTextSpan.innerText = newText; // Text im span-Element aktualisieren
  inputText.value = ""; // Eingabefeld leeren
});

scalebtn.addEventListener("click", function (event) {
  event.preventDefault();
  const newScale = scaleinput.value;
  myTextSpan.style.transform = `scale(${newScale})`;
});

colorbtn.addEventListener("click", function (event) {
  event.preventDefault();
  const color = colorinput.value;
  myTextSpan.style.border = `solid 4px ${color}`;
});

linebreakbtn.addEventListener("click", function (event) {
  event.preventDefault();
  const newLineBreakWidth = linebreakinput.value;
  myTextSpan.style.width = `${newLineBreakWidth}px`;
});

fontsizebtn.addEventListener("click", function (event) {
  event.preventDefault();
  const newFontSize = fontsizeinput.value;
  myTextSpan.style.fontSize = `${newFontSize}px`;
});

const menu = document.querySelector("#menu");
const textfields = document.querySelectorAll(".textfield");

// Zeige das Menü über dem Textfeld an, über dem sich der Mauszeiger befindet
textfields.forEach((textfield) => {
  textfield.addEventListener("mouseenter", (e) => {
    const rect = textfield.getBoundingClientRect(); // Position des Textfelds abrufen
    menu.style.display = "block";
    menu.style.left = `${rect.left}px`;
    menu.style.top = `${rect.bottom + window.scrollY}px`; // Y-Position anpassen
  });

  textfield.addEventListener("mouseleave", () => {
    // Verstecke das Menü, wenn die Maus das Textfeld verlässt
    menu.style.display = "none";
  });

  // Behalte das Menü sichtbar, wenn man darauf hovert
  menu.addEventListener("mouseenter", () => {
    menu.style.display = "block";
  });

  menu.addEventListener("mouseleave", () => {
    menu.style.display = "none";
  });
});

const addButton = document.querySelector("#add-textfield-button");
const textfieldsContainer = document.querySelector(".textfields");

// Funktion, um ein neues Textfeld hinzuzufügen
addButton.addEventListener("click", () => {
  // Neues span-Element erstellen
  const newTextfield = document.createElement("span");
  newTextfield.classList.add("textfield");
  newTextfield.textContent = `Textfeld ${
    textfieldsContainer.children.length + 1
  }`;

  // Event-Listener hinzufügen, um das Menü anzuzeigen
  newTextfield.addEventListener("mouseenter", (e) => {
    const rect = newTextfield.getBoundingClientRect(); // Position des Textfelds abrufen
    menu.style.display = "block";
    menu.style.left = `${rect.left + window.scrollX}px`; // X-Position
    menu.style.top = `${rect.bottom + window.scrollY}px`; // Y-Position unterhalb des Textfelds
  });

  newTextfield.addEventListener("mouseleave", () => {
    menu.style.display = "none";
  });

  // Menü sichtbar halten, wenn die Maus darauf ist
  menu.addEventListener("mouseenter", () => {
    menu.style.display = "block";
  });

  menu.addEventListener("mouseleave", () => {
    menu.style.display = "none";
  });

  // Neues Textfeld in den Container einfügen
  textfieldsContainer.appendChild(newTextfield);
});
