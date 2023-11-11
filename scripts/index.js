const navbar = document.getElementById("navbar");
const navbarToggle = document.getElementById("navbarToggle");
const navbarLinks = document.getElementById("navbarLinks");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 10) {
//     navbar.style.backgroundColor = "#193848";
//   } else {
//     navbar.style.backgroundColor = "transparent";
//   }
// });

// window.addEventListener("scroll", () => {
//   if (window.innerWidth > 900) {
//     if (window.scrollY > 10) {
//       navbar.style.backgroundColor = "#193848";
//     } else {
//       navbar.style.backgroundColor = "transparent";
//     }
//   }
// });

navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("show");
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
