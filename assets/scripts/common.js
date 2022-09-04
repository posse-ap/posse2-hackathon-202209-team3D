"use strict";

// START HEADER 
{
  const menuButton = document.getElementById("menu_button");
  const overlayMenu = document.querySelector(".overlay_navigation");

  menuButton.addEventListener("click", () => {
    overlayMenu.classList.toggle("show");
    console.log('開きました')
  });
}
// END HEADER 