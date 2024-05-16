const body = document.querySelector("body");
const navbar = body.querySelector(".navbar");
const toggle = body.querySelector(".toggle");
const toggleClose = body.querySelector(".toggle-close");

toggle.addEventListener("click", () =>{
	navbar.classList.toggle("open");
});

toggleClose.addEventListener("click", () =>{
	navbar.classList.remove("open");
});