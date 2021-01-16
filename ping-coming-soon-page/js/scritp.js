const form = document.querySelector("form");
const mail = document.querySelector("#email");
const mssg = document.querySelector(".validate-mssg");

form.addEventListener("submit", function (e) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!regex.test(mail.value)) {
		e.preventDefault();
		mssg.innerText = "Please provide a valid email address";
		mail.classList.add("error");
	}
});
