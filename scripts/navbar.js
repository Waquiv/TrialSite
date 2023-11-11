function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    // Change 50 to your desired scroll position
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function toggleDropdown(index) {
  const dropdown = document.getElementById("dropdown-" + index);
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    // Hide other dropdowns before displaying this one
    dropdown.style.display = "block";
  }
}
