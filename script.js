const socialsBtn = document.querySelector("#socials-button");
const footer = document.querySelector("footer");

socialsBtn.addEventListener("click", () => {
  footer.scrollIntoView({ behavior: "smooth" });
});
