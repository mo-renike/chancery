const toggle = () => {
  const burger = document.querySelector(".toggler");
  const nav = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-link");
  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
  for (const navItem of navItems) {
    navItem.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  }
};
toggle();
