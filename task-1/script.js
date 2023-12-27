document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector("#dropdown");
  const responsiveToggleButton = document.querySelector("#responsive-btn");
  const navbarItems = document.querySelector("#nav-menu-items");
  const responsiveToggleIcon = document.querySelector(".fa-solid");
  const navItems = document.querySelector(".nav-menu-items");

  function toggleNavbar() {
    responsiveToggleIcon.classList.toggle("fa-bars");
    responsiveToggleIcon.classList.toggle("fa-xmark");

    // dropdown
    navbarItems.classList.toggle("toggle");
  }
  function toggleDropDown() {
    
  }

  // events
  responsiveToggleButton.addEventListener("click", toggleNavbar);
  dropdown.addEventListener("click", toggleDropDown);
});
