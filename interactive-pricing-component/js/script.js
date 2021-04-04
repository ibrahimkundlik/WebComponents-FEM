const slider = document.querySelector(".slider");
const pageview = document.querySelector(".pageview-dynamic");
const duration = document.querySelector("#duration");
const pricing = document.querySelector(".pricing");

let sliderClick = false;
slider.addEventListener("mouseup", () => {
	sliderClick = false;
});
slider.addEventListener("mousedown", () => {
	sliderClick = true;
});

const handleSliderChange = (e) => {
	pageview.innerText = `${e.target.value}`;
};

const handleCheckboxChange = (e) => {
	if (e.target.checked)
		pricing.innerHTML = `<span class="pricing-bold">$99.00</span> / year`;
	else pricing.innerHTML = `<span class="pricing-bold">$16.00</span> / month`;
};

slider.addEventListener("change", handleSliderChange);
slider.addEventListener("touchmove", handleSliderChange);
slider.addEventListener("mousemove", (e) => {
	if (sliderClick) handleSliderChange(e);
});
duration.addEventListener("change", handleCheckboxChange);
