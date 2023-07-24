// TOP2. 캐릭터버튼 (스크롤 내리면 점프)
$(window).scroll(function() {
  var yOffset = window.scrollY || document.documentElement.scrollTop;
  var topBtn2 = $(".top_button .top_btn2");

  if (yOffset > 0) {
      topBtn2.addClass("jump");
  } else {
      topBtn2.removeClass("jump");
  }

});

// TOP4. 스크롤 내리면 보이는 버튼
$(window).scroll(function () {
  var yOffset = window.scrollY || document.documentElement.scrollTop;
  var topBtn4 = $(".top_button .top_btn4");
  if (yOffset > 0) {
    topBtn4.removeClass("top");
  } else {
    topBtn4.addClass("top");
  }
});


// TOP5. 스크롤 내리면 보이고 올리면 안 보이는 버튼 (fade in/out)
$(function () {
  let lastScrollY = 0;
  addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const direction = scrollY > lastScrollY ? $(".top_btn5").fadeIn() : $(".top_btn5").fadeOut();
    lastScrollY = scrollY;
    console.log(direction);
  });
});