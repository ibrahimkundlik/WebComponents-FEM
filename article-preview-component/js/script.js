const shareBtn = document.querySelector(".share-img-cont");
const avatarDisp = document.querySelector(".avatar-disp");
const shareDisp = document.querySelector(".share-disp");

shareBtn.addEventListener("click", function () {
	avatarDisp.classList.toggle("avatar-hide");
	shareDisp.classList.toggle("share-hide");
	avatarDisp.parentElement.classList.toggle("bg-clr");
});
