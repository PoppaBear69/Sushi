var body = document.querySelector("body");
document.addEventListener("click", handleClicks);

function handleClicks(e) {
    if (e.target.matches(".map")) {
    body.classList.toggle("showme");
    e.preventDefault();
  } else {
    body.classList.remove("showme");
  }
}
