const logoutbtn = document.getElementById("logoutbtn");

logoutbtn.addEventListener("click", function () {
  function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let verfällt = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${verfällt}; path=/`;
  }

  function deleteCookie(name) {
    setCookie(name, null, null);
  }

  deleteCookie("user");
  location.reload();
});
