const menu = document.querySelector(".menu");
let menuClose = true;
const menuItems = document.querySelector(".menu-items");

menu.addEventListener("click", () => {
	if (menuClose) {
		menu.src = "./images/icon-close.svg";
		menuClose = false;
	} else {
		menu.src = "./images/icon-hamburger.svg";
		menuClose = true;
	}
	menuItems.classList.toggle("show-menu");
});
