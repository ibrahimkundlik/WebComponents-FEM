const updateSlider = (event) => {
	slider.style.background =
		"linear-gradient(to right, #a5f3eb 0%, #a5f3eb " +
		event.target.value +
		"%, #eaeefb " +
		event.target.value +
		"%, #eaeefb 100%)";
};

slider.addEventListener("change", updateSlider);
slider.addEventListener("touchmove", updateSlider);
slider.addEventListener("mousemove", (e) => {
	if (sliderClick) updateSlider(e);
});

document.addEventListener("DOMContentLoaded", () => {
	slider.value = 50;
	duration.checked = false;
});
