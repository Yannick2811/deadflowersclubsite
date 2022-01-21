const socialsBtn = document.querySelector("#socials-button");
const footer = document.querySelector("footer");
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbar = document.getElementsByClassName("navbar")[0];

socialsBtn.addEventListener("click", () => {
  footer.scrollIntoView({ behavior: "smooth" });
});

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
