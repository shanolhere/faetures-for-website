const checkbox = document.querySelector(".checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

/*hamburger*/

const hamburger = document.querySelector(".hamburger");
const navul = document.querySelector("ul");
const navlink = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navul.classList.toggle("active");
});

navlink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navul.classList.remove("active");
}

/*scrolling functionality*/
const scrollUp = document.querySelector(".arrow");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});
