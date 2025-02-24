document.addEventListener("click", handleClicks);
function handleClicks(e) {
  if (e.target.closest(".map")) {
    e.preventDefault();
    var mapContainer = document.getElementById("mapContainer");
    if (mapContainer.innerHTML.trim() === "") {
      var iframe = document.createElement("iframe");
      iframe.width = "600";
      iframe.height = "450";
      iframe.style.border = "0";
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.232155220125!2d-73.9749227!3d40.6778979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ba8edab126b:0xfaa0551477e2ec72!2sGeido!5e0!3m2!1sen!2sus!4v1234567890";
      mapContainer.innerHTML = "";
      mapContainer.appendChild(iframe);
      mapContainer.style.display = "block";
    } else {
      mapContainer.innerHTML = "";
      mapContainer.style.display = "none";
    }
  } else {
    var mapContainer = document.getElementById("mapContainer");
    if (mapContainer) {
      mapContainer.innerHTML = "";
      mapContainer.style.display = "none";
    }
  }
}
