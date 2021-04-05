const selectTheme = document.querySelector("#duration");
const cssVars = [
	"--bg-color",
	"--bg-top-color",
	"--bg-card",
	"--bg-card-hover",
	"--primary-text",
	"--secondary-text",
];
const cssVarsValue = {
	dark: [
		"hsl(230, 17%, 14%)",
		"hsl(232, 19%, 15%)",
		"hsl(228, 28%, 20%)",
		"hsl(228, 26%, 27%)",
		"hsl(0, 0%, 100%)",
		"hsl(228, 34%, 66%)",
	],
	light: [
		"hsl(0, 0%, 100%)",
		"hsl(225, 100%, 98%)",
		"hsl(232, 33%, 91%)",
		"hsl(227, 47%, 96%)",
		"hsl(230, 17%, 14%)",
		"hsl(228, 12%, 44%)",
	],
};

const handleChange = (status) => {
	const themeStore = `${status ? "light" : "dark"}`;
	localStorage.setItem("theme", themeStore);

	cssVars.forEach((cssVar, ind) => {
		document.documentElement.style.setProperty(
			cssVar,
			`${status ? cssVarsValue.light[ind] : cssVarsValue.dark[ind]}`
		);
	});
};

selectTheme.addEventListener("change", (e) => handleChange(e.target.checked));

document.addEventListener("DOMContentLoaded", () => {
	const theme = localStorage.getItem("theme");
	if (theme === "light") {
		selectTheme.checked = true;
		handleChange(true);
	} else {
		selectTheme.checked = false;
	}
});
