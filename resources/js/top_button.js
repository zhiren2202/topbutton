
const topBtn = $("[class*='top_btn']");


// TOP2. 캐릭터버튼 (스크롤 내리면 점프)
$(window).scroll(function() {
  const yOffset = window.scrollY || document.documentElement.scrollTop;
  yOffset > 0 ? topBtn.addClass("scroll") : topBtn.removeClass("scroll");
});


// TOP5. 스크롤 내리면 보이고 올리면 안 보이는 버튼 (fade in/out)
// $(function () {
//   let lastScrollY = 0;
//   addEventListener("scroll", function () {
//     const scrollY = window.scrollY;
//     const direction = scrollY > lastScrollY ? $(".top_btn5").fadeIn() : $(".top_btn5").fadeOut();
//     lastScrollY = scrollY;
//     console.log(direction);
//   });
// });