const questions = document.querySelectorAll(".question-cont");

questions.forEach((curr) => {
	curr.addEventListener("click", () => {
		curr.classList.toggle("fw-toggle");
		curr.nextElementSibling.classList.toggle("hidden");
		curr.children[1].classList.toggle("arrow-rotate");
	});
});
