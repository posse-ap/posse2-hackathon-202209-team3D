"use strict";

// START HEADER 
{
  const menuButton = document.getElementById("menu_button");
  const overlayNavigation = document.querySelector(".overlay_navigation");

  menuButton.addEventListener("click", () => {
    overlayNavigation.classList.toggle("show");
    console.log('開きました')
  });
}
// END HEADER 