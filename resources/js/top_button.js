const topBtn = $("[class*='top_btn']");
const topBtn2 = document.querySelector('.top_btn2');
const topBtn3 = document.querySelector('.top_btn3');
const topBtn5 = document.querySelector('.top_btn5');
const topBtn6 = document.querySelector('.top_btn6');

$(window).scroll(function() {
  const yOffset = window.scrollY || document.documentElement.scrollTop;
  yOffset > 0 ? topBtn.addClass("scroll") : topBtn.removeClass("scroll");
});

window.addEventListener('wheel', (e) => { 
  e.deltaY > 0 ? topBtn2.classList.add('scrollWheel') : topBtn2.classList.remove('scrollWheel');
  e.deltaY > 0 ? topBtn5.classList.add('scrollWheel') : topBtn5.classList.remove('scrollWheel');
});

topBtn3.addEventListener('mouseover', () => {
  topBtn3.classList.add('spin');
  topBtn3.classList.remove('spin-reverse');
});
topBtn3.addEventListener('mouseout', () => {
  topBtn3.classList.remove('spin');
  topBtn3.classList.add('spin-reverse');
});

window.addEventListener('click', () => {
  topBtn6.classList.add('click');
});
window.addEventListener('mouseout', () => {
  topBtn6.classList.remove('click');
});
