const form = document.querySelector(".info-form");
const mail = document.querySelector("#email");

form.addEventListener("submit", function (e) {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!regex.test(mail.value)) {
		e.preventDefault();
		showError(mail.nextElementSibling);
		showError(mail.nextElementSibling.nextElementSibling);
	} else {
		removeError(mail.nextElementSibling);
		removeError(mail.nextElementSibling.nextElementSibling);
	}
	ipCheck(e);
});

const ipCheck = (e) => {
	for (let i = 0; i < 4; i++) {
		if (i != 2) {
			const ipVal = e.target.children[i].children[0].value;
			if (ipVal.length === 0) {
				e.preventDefault();
				showError(e.target.children[i].children[1]);
				showError(e.target.children[i].children[2]);
			} else {
				removeError(e.target.children[i].children[1]);
				removeError(e.target.children[i].children[2]);
			}
		}
	}
};

const showError = (target) => {
	target.classList.add("error-show");
};

const removeError = (target) => {
	target.classList.remove("error-show");
};
