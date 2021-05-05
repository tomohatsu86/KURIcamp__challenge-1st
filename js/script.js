//バーガーメニュー
$('.menu__btn').click(function(){
  $(this).toggleClass('active');
  $('.header__nav').toggleClass('active');
  $('.burger-musk').fadeToggle(300);
  $('body').toggleClass('noscroll');
});