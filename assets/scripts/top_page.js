"use strict";
{
  //logoの表示
$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});
}


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
        if (scroll > blockPosition - windowHeight + 200) {
          $(this).addClass("scroll");
        }
      });
    });
  });
}
