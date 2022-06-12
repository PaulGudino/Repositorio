const navButton = document.querySelector(".nav_button")
const navUl = document.querySelector(".nav_ul")

navButton.addEventListener("click", () => {
	navUl.classList.toggle("nav_visible");
})