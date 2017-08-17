function bids() {
  $('.bids-nav a').on('click', function(){
    $nav = $(this).attr('data-bids');

    if ( $(this).hasClass('current') ) {
      return false;
    } else {
      $('.bids-nav a').removeClass('current');
      $(this).addClass('current');
    }

    if ( $nav == 'all' ) {
      $('.bids-list .item').slideDown();
    } else {
      $('.bids-list .item').each(function(){
        var $this = $(this);
        if ( $this.attr('data-bids-status') == $nav ) {
          $this.slideDown()
        } else {
          $this.slideUp()          
        }
      });
    }
  });

  $('.bids-list .item .docs a').on('click', function(){
    $(this).parent().parent().next().slideToggle();
    $(this).toggleClass('is-active');
    $(this).parents('.item').toggleClass('is-active');
  });

  
  $('.m_bids.messages .docs a').on('click', function(){
    $(this).text(function(i, text){
      return text === "Свернуть сообщение" ? "Посмотреть сообщение" : "Свернуть сообщение";
    })
  });

  
}
bids();