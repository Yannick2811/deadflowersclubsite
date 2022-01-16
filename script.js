const socialsBtn = document.querySelector("#socials-button");
const socials = document.querySelector("#socials");

socialsBtn.addEventListener("click", () => {
  socials.scrollIntoView({ behavior: "smooth" });
});
