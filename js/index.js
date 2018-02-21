$(document).ready(function(e) {
  $(".button-collapse").sideNav();
});

const fixedNav = $(".navbar-fixed");

let lastScroll = 0;
$(window).scroll(e => {
  const currScroll = $(window).scrollTop();
  if (currScroll > lastScroll && currScroll > 100) {
    fixedNav.css("top", "-100px");
    fixedNav.css("transition", "top 0.3s");
  } else {
    fixedNav.css("top", "0");
  }
  lastScroll = currScroll;
});

let navBarColor = "#292929";
$(".nav-wrapper").css("background-color", navBarColor);

$("#about-slide").click(function(e) {
  e.preventDefaul();
  // $('html,body').animate({
  //     scrollTop: $("#about").offset().top},
  //     'slow');
  console.log('sf');
});