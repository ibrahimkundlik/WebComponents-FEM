const form = document.querySelector("form");
const mail = document.querySelector("#email");
const mssg = document.querySelector(".validate-mssg");

form.addEventListener("submit", function (e) {
	if (
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			mail.value
		)
	) {
		return;
	} else {
		e.preventDefault();
		mssg.innerText = "Please provide a valid email address";
		mail.classList.add("error");
	}
});
