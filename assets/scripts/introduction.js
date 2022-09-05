let labels = ['label', 'label', 'label'];

function slideVisibleToggle(sWrap) {
    sWrap.forEach(function(slideItem) {
      if ( slideItem.classList.contains('swiper-slide-visible') == true ){
          if ( slideItem.classList.contains('slide-invisible') == true ){
              slideItem.classList.remove('slide-invisible');
          }
      } else {
          if ( slideItem.classList.contains('slide-invisible') == false ){
              slideItem.classList.add('slide-invisible');
          }
      }
  });
}

var swiper = new Swiper(".mySwiper", {
  /* スライド自動切り替え */
  autoplay: {
      /* スライド自動切り替え永続 */
      disableOnInteraction: false,
      /* スライド自動切り替え方向 */
      reverseDirection: false,
      /* マウスホバーでスライド自動切り替え停止 */
      pauseOnMouseEnter: true,
  },
  /* カバフロー構成 */
  effect: "coverflow",
  /* 最初の画像(img1.jpeg)をスライドの先頭にする */
  centeredSlides: true,
  /* スライドの枚数(モバイル) */
  slidesPerView: 1,
  /* レスポンシブ */
  breakpoints: {
      601: {
          /* スライドの枚数(タブレット) */
          slidesPerView: 1,
      },
      1200: {
          /* スライドの枚数(PC) */
          slidesPerView: 1.5,
      }
  },
  /* スライドを切り返す */
  loop: true,
  /* カバーフローの効果 */
  coverflowEffect: {
      /* スライドの角度 */
      rotate: 10,
      /* スライドの影非表示 */
      slideShadows: false,
  },
  /* ページネーション表示 */
  pagination: {
      el: ".swiper-pagination",
			clickable:"true",
			renderBullet: function (index, className) {
				return '<div class="' + className + '">' + (labels[index])+ '</div>';
			},
			
  },
  /* スライドの切り替えボタン表示 */
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  /* イベント */
  on: {
      /* スライドが切り替わったとき */
      slideChange: function () {
          slideVisibleToggle(document.querySelectorAll('.swiper-slide'));
      },
  },
});


