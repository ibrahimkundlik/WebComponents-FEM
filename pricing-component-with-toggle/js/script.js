const pricing = [
	{
		annually: "&dollar;199.99",
		monthly: "&dollar;19.99",
	},
	{
		annually: "&dollar;249.99",
		monthly: "&dollar;24.99",
	},
	{
		annually: "&dollar;399.99",
		monthly: "&dollar;39.99",
	},
];
const duration = document.querySelector("#duration");
const priceArray = document.querySelectorAll(".pricing");

const handleChange = (e) => {
	priceArray.forEach((each, ind) => {
		if (e.target.checked) each.innerHTML = pricing[ind].monthly;
		else each.innerHTML = pricing[ind].annually;
	});
};

duration.addEventListener("change", handleChange);

document.addEventListener("DOMContentLoaded", () => {
	duration.checked = false;
});
