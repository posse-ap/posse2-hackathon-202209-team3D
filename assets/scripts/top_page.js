"use strict";
{
  const hero = document.getElementById("js-hero");

  window.addEventListener('load', function(){
    hero.classList.add("load");
  });

}

{
  $(function() {
    $(window).scroll(function() {
      $(".js-scroll").each(function() {
        var scroll = $(window).scrollTop();
        var blockPosition = $(this).offset().top;
        var windowHeight = $(window).height();
        if (scroll > blockPosition - windowHeight + 300) {
          $(this).addClass("scroll");
        }
      });
    });
  });
}
