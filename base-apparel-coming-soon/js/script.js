const form = document.querySelector("form");
const mail = document.querySelector("#email");
const errorImg = document.querySelector(".error-img");
const errorMssg = document.querySelector(".error-mssg");

form.addEventListener("submit", displayError);

function displayError(e) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!regex.test(mail.value)) {
		e.preventDefault();
		errorImg.classList.add("error-img-trns");
		errorMssg.style.display = "block";
	}
}
