const trial = document.querySelector(".trial-btn");
const error = document.querySelectorAll(".error-icon");
const mssg = document.querySelectorAll(".error");

trial.addEventListener("click", () => {
	error.forEach((curr) => {
		curr.classList.add("error-show");
	});
	mssg.forEach((curr) => {
		curr.classList.add("error-show");
	});
});
