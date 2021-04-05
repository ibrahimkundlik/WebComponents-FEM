const projectList = [
	"article-preview-component",
	"base-apparel-coming-soon",
	"coding-bootcamp-testimonials-slider",
	"faq-accordion-card",
	"four-card-feature-section",
	"fylo-data-storage-component",
	"huddle-landing-page",
	"intro-component-with-signup-form",
	"ping-coming-soon-page",
	"profile-card-component",
	"project-tracking-intro-component",
	"single-price-grid-component",
	"social-proof-section",
	"testimonials-grid-section",
	"interactive-pricing-component",
	"pricing-component-with-toggle",
	"social-media-dashboard",
];
const projectCont = document.querySelector(".projects-cont");

const displayProjects = () => {
	let projHTML = "";
	projectList.forEach((project) => {
		projHTML += `
    <li class="project">
      <a href="./${project}/index.html" class="project-link">
        <div class="project-img">
          <img src="./${project}/design/desktop-preview.jpg" alt="Desktop Preview"/>
        </div>
        <p class="project-name">${project}</p>
      </a>
    </li>`;
	});
	projectCont.innerHTML = projHTML;
};

document.addEventListener("DOMContentLoaded", () => {
	displayProjects();
});
