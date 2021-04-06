import projectList from "./projectList.js";
const projectCont = document.querySelector(".projects-cont");
var backToTop = document.querySelector(".back-top");

backToTop.addEventListener("click", (e) => {
	e.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

const displayProjects = () => {
	let projHTML = "";
	projectList.forEach(({ name, language }, ind) => {
		projHTML += `
    <li class="project">
      <a href="./${name}/index.html" class="project-link">
        <div class="project-img">
          <img src="./${name}/design/desktop-preview.jpg" alt="Desktop Preview" class="desktop-preview"/>
        </div>
				<p class="project-lang">
					${language.html ? `<span class="lang-html">HTML</span>` : ""}
					${language.css ? `<span class="lang-css">CSS</span>` : ""}
					${language.js ? `<span class="lang-js">JS</span>` : ""}
				</p>
        <p class="project-name">
				${ind < 10 ? "0" + ind : ind}.
				${updateProjectName(name)}</p>
      </a>
    </li>`;
	});
	projectCont.innerHTML = projHTML;
};

const updateProjectName = (name) => {
	return name
		.split("")
		.map((curr, ind, arr) => {
			if (curr === "-") return " ";
			if (arr[ind - 1] === "-" || ind === 0) return curr.toUpperCase();
			return curr;
		})
		.join("");
};

document.addEventListener("DOMContentLoaded", () => {
	displayProjects();
});
