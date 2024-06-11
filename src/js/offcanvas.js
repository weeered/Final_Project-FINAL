const offcanvas = document.querySelector(".offcanvas");

const toggle = document.querySelector(".offcanvas_toggle");

const space = document.querySelector(".offcanvas_emptyspace");

function openCanvas() {
	offcanvas.style.left = "0";
	space.style.width = "100%";
	space.style.opacity = "100%";
	header.style.opacity = "0"
}

function closeCanvas() {
	offcanvas.style.left = "-100%";
	space.style.opacity = "0";
	space.style.width = "0";
  header.style.opacity = "100%"
}

window.addEventListener("scroll", closeCanvas);