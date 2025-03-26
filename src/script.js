const texts = {
  1: "Mache alles nur einfacher",
  2: "Gerate in den Flow",
  3: "Kostenlos. Für immer.",
  4: "Plane deinen Tag",
};

//Texfield
const changinfield = document.getElementById("changintext");

const text = Object.keys(texts);

function selectRandomValue() {
  const randomKey = text[Math.floor(Math.random() * text.length)];
  const randomValue = texts[randomKey];
  changinfield.innerHTML = randomValue;

  setTimeout(selectRandomValue, 1750); // Ruft die Funktion erneut mit einem Delay auf
}

selectRandomValue();
