document.getElementById("wrapper").style.display = "none";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Geladen!");

  const loading_element = document.getElementById("loader");
  const content = document.getElementById("wrapper");
  setTimeout(function () {
    content.style.display = "flex";
    loading_element.style.display = "none";
  }, 1000);
});
