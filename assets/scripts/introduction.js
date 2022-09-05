let labels = ["飯野功志朗", "池形凌", "伊藤瑠星", "稲継彪大", "内海航大", "大串真由", "川村優奈", "河内光太", "木下倭", "神保舞琴", "臺本純華", "田上誠也", "竹内優", "田中友里恵", "冨永恵祐", "内藤麻優子", "中井厚博", "縄野佑匡", "西田優希", "野原春菜", "梅嘉麒", "原拓海", "橋本克樹", "東明日菜", "日置実里", "廣川由奈", "廣澤慈英", "福田沙良", "桝井正樹", "又吉見秋", "松本はるか", "村神千尋", "本村晴基"];

function slideVisibleToggle(sWrap) {
    sWrap.forEach(function (slideItem) {
    if (slideItem.classList.contains("swiper-slide-visible") == true) {
        if (slideItem.classList.contains("slide-invisible") == true) {
        slideItem.classList.remove("slide-invisible");
    }
    } else {
        if (slideItem.classList.contains("slide-invisible") == false) {
        slideItem.classList.add("slide-invisible");
    }
    }
});
}

var swiper = new Swiper(".mySwiper", {
    autoplay: {
    /* スライド自動切り替え永続 */
    disableOnInteraction: false,
    /* スライド自動切り替え方向 */
    reverseDirection: false,
    /* マウスホバーでスライド自動切り替え停止 */
    pauseOnMouseEnter: true,
},
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
    },
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
    clickable: "false",
    renderBullet: function (index, className) {
        return '<div class="' + className + '">' + labels[index] + "</div>";
    },
},
    /* スライドの切り替えボタン表示 */
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},
    /* イベント */
    on: {
    /* スライドが切り替わったとき */
    slideChange: function () {
    slideVisibleToggle(document.querySelectorAll(".swiper-slide"));
    },
},
});
