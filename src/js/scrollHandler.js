const header = document.querySelector(".header");

const body = document.body;

const button = document.querySelector(".scrollup__button");

const triggerElement = document.querySelector(".section-top_fixed");

const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
let headerfixed = 0;

function changeHeaderColor() {
	const currentScroll = window.scrollY;

	if (currentScroll <= 0) {
		body.classList.remove(scrollUp);
		return;
	}

	if (
		currentScroll > lastScroll &&
		!body.classList.contains(scrollDown) &&
		headerfixed == 1
		&&
		currentScroll >
			triggerElement.offsetTop +
				triggerElement.offsetHeight -
				header.offsetHeight + 300
	) {
		// down
		body.classList.remove(scrollUp);
		body.classList.add(scrollDown);

		header.style.top = "-10%";
		console.log("down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains(scrollDown) &&
		headerfixed == 1 
	) {
		// up
		body.classList.remove(scrollDown);
		body.classList.add(scrollUp);
		header.style.top = "0";
		console.log("up");
	}
	lastScroll = currentScroll;

	if (
		window.scrollY >
			triggerElement.offsetTop +
				triggerElement.offsetHeight -
				header.offsetHeight -
				150 &&
		headerfixed == 0
	) {
		header.style.backgroundColor = "#342E8Ce5";
		header.style.position = "fixed";

		headerfixed = 1;

		button.style.transform = "translate(0, 0)";
	} else if (
		window.scrollY <
			triggerElement.offsetTop +
				triggerElement.offsetHeight -
				header.offsetHeight -
				150 &&
		headerfixed == 1
	) {
		header.style.backgroundColor = "#00000007";
		header.style.position = "absolute";

		header.style.top = "0";
		headerfixed = 0;

		button.style.transform = "translate(0, 150px)";
	}
}

window.addEventListener("scroll", changeHeaderColor);
