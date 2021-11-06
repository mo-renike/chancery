const toggle = () => {
  const burger = document.querySelector(".toggle-btn");
  const nav = document.querySelector(".navbar-nav");
  const navItems = document.querySelectorAll(".nav-link");

  burger.addEventListener("click", () => {
    nav.classList.remove("show");
  });
  for (const navItem of navItems) {
    navItem.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  }
};
toggle();

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
