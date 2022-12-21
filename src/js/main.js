var ButtonJvs = document.querySelector(".button-jvs");
var body = document.querySelector("body");

ButtonJvs.addEventListener("click", (event) => {
  event.preventDefault();
  body.classList.toggle("theme");
});
