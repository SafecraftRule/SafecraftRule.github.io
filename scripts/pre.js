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
const colorbtn = document.getElementById("bordercolorbtn");

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
