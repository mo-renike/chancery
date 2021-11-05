let testimonials = document.querySelectorAll(".testmony");
let slide_btn = document.querySelector(".buttons");
let all_tabs = document.querySelectorAll(".btn-slide");
let new_btn_array = Array.from(all_tabs);

testimonials.forEach((el, ind) => {
  el.style.transform = `translateX(${100 * ind}%) `;
});

// click to slide

slide_btn.addEventListener("click", (e) => {
  let target_btn = e.target.closest(".btn-slide");
  if (target_btn) {
    all_tabs.forEach((tab) => {
      tab.classList.remove("active_btn");
      target_btn.classList.add("active_btn");
    });

    let current = new_btn_array.indexOf(target_btn);
    testimonials.forEach((el, i) => {
      el.style.transform = `translateX(${100 * (i - current)}%) `;
    });
  }
});
