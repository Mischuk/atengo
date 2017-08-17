$(window).scroll(function(){
  if ($(this).scrollTop() > 60) {
      $('.m_header .bottom, .bottom-blank-panel').addClass('fixed');
  } else {
      $('.m_header .bottom, .bottom-blank-panel').removeClass('fixed');
  }
});

$('.btn-mobile-menu').on('click', function(){
  $(this).toggleClass('is-open');
  $('.menu').toggleClass('is-open')
});

