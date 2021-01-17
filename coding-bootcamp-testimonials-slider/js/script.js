const profileData = [
	{
		name: "John Tarkpor",
		post: "Junior Front-end Developer",
		review:
			"“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
	},
	{
		name: "Tanya Sinclair",
		post: "UX Engineer",
		review:
			"“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
	},
	{
		name: "Jene Doe",
		post: "Web Developer",
		review:
			"“ I can honestly say Boot Camp was a life changing experience for me. I still wonder exactly what prompted me to sign up, but I am so glad I did. I really hope to be back in the fall. ”",
	},
];

let profileCount = 0;
const controls = document.querySelector(".controls");
const review = document.querySelector(".profile-review");
const prName = document.querySelector(".profile-name");
const post = document.querySelector(".profile-post");
const profileImg = document.querySelector(".profile-img");
const prev = document.querySelector(".previous");
const next = document.querySelector(".next");

controls.addEventListener("click", (e) => {
	if (
		e.target.className === "previous" ||
		e.target.parentNode.className === "previous"
	) {
		profileCount--;
		changeProfile();
	} else if (
		e.target.className === "next" ||
		e.target.parentNode.className === "next"
	) {
		profileCount++;
		changeProfile();
	}
});

function changeProfile() {
	if (profileCount <= 0) {
		profileCount = 0;
		prev.disabled = true;
	} else if (profileCount >= profileData.length - 1) {
		profileCount = profileData.length - 1;
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}

	prName.innerText = `${profileData[profileCount].name}`;
	review.innerText = `${profileData[profileCount].review}`;
	post.innerText = `${profileData[profileCount].post}`;

	const imgURL = profileData[profileCount].name.split(" ")[0].toLowerCase();
	profileImg.setAttribute("src", `./images/image-${imgURL}.jpg`);
}
