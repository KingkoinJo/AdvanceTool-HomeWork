let button = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

function activate() {
  menu.classList.toggle("active");
  button.classList.toggle("motion");
}
button.addEventListener("click", activate);
