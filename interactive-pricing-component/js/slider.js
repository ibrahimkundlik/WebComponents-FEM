const slider = document.querySelector(".slider");

slider.addEventListener("change", (event) => {
	updateSlider(event);
});

slider.addEventListener("mousemove", (event) => {
	updateSlider(event);
});

slider.addEventListener("touchmove", (event) => {
	updateSlider(event);
});

const updateSlider = (event) => {
	slider.style.background =
		"linear-gradient(to right, #a5f3eb 0%, #a5f3eb " +
		event.target.value +
		"%, #eaeefb " +
		event.target.value +
		"%, #eaeefb 100%)";
};

document.addEventListener("DOMContentLoaded", () => {
	slider.value = 50;
});
