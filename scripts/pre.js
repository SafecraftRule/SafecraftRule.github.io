const container = document.querySelector(".wrapper"); // Container für Textfeld und Menü
const button = document.querySelector("#move-button"); // Button für Verschiebung

let isDragging = false; // Status, ob das Dragging aktiv ist

// Wenn der Button gedrückt wird
button.addEventListener("mousedown", () => {
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
