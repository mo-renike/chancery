"use strict";

var toggle = function toggle() {
  var burger = document.querySelector(".toggle-btn");
  var nav = document.querySelector(".navbar-nav");
  var navItems = document.querySelectorAll(".nav-link");
  burger.addEventListener("click", function () {
    nav.classList.remove("show");
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = navItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var navItem = _step.value;
      navItem.addEventListener("click", function () {
        nav.classList.remove("show");
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
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