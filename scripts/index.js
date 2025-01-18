const registerbtn = document.getElementById("registerbtn");
const closediabtn = document.getElementById("closedialog");
const submitbtn = document.getElementById("registerbtn1");
const usernamefield = document.getElementById("usernameinput");
const emailfield = document.getElementById("emailinput");
const passwordfield = document.getElementById("passwordinput");
const errordia = document.getElementById("error");
const registerinfodia = document.getElementById("registerinfo");

registerbtn.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("registerdia").showModal();
});

closediabtn.addEventListener("click", function (event) {
  const dialog = document.getElementById("registerdia");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
  dialog.close();
});

function showDialog() {
  const dialog = document.getElementById("registerdia");
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  dialog.showModal();
}

submitbtn.addEventListener("click", function (event) {
  submitbtn.disabled = true;
  submitbtn.innerHTML = "Bitte warten...";
  const usernameinput = usernamefield.value;
  const password = passwordfield.value;
  const username = usernamefield.value;
  try {
    registerinfodia.showModal();
  } catch (error) {
    console.log(error);

    errordia.showModal();
    setTimeout(function () {
      submitbtn.disabled = false;
      submitbtn.innerHTML = "Registrieren";
      errordia.close();
    }, 2000);
  }
});
