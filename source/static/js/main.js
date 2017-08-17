$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });

    /*! http://johnpolacek.github.io/imagefill.js/ */
    // $('.item').imagefill();

    /*! http://www.jacklmoore.com/autosize/ */
    autosize($('textarea'));


    /*! https://select2.github.io/ */
    $('select').on("change", function (e) { 
      alert( 'Выбрано: ' + $(this).val() );
    });
    $('select').select2({
      minimumResultsForSearch: Infinity
    });

    /*! Inputs mask*/
    function inputMask() {
      $(".mask-date").mask("99.99.9999",{placeholder:"__.__.____"});
      $(".mask-year").mask("9999",{placeholder:""});
      $(".mask-tel").mask("+7 (999) 999-99-99",{placeholder:"X"});
    };
    inputMask();

    function sticky_footer() {
      
      var bumpIt = function() {  
        $('body').css('margin-bottom', $('.m_footer').outerHeight());
      }, didResize = false;
      bumpIt();
      
      function footer_shape() {
        var WRAPPER = 1000;
        var shape_width = ($(window ).width() - WRAPPER)/2;
        $('.footer-shape, .container-shapes').css('width', shape_width);
      }
      footer_shape();

      $(window).resize(function() { 
        didResize = true;
        footer_shape();
      });

      setInterval(function() {  
        if(didResize) {
          didResize = false;
          bumpIt();
        }
      }, 250);
    }
    sticky_footer();
    

    function expansion_panel() {
      $('.expansion-panel li .ep-header').on('click', function(){
        $(this).next().slideToggle(300);
        $(this).toggleClass('is-open');
      });
    }
    expansion_panel();
    

    function ripples_effect() {
      var ink, d, x, y;
      $(".ripple").click(function(e){
        if($(this).find(".ink").length === 0){
            $(this).prepend("<span class='ink'></span>");
        }
             
        ink = $(this).find(".ink");
        ink.removeClass("animate");
         
        if(!ink.height() && !ink.width()){
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({height: d, width: d});
        }
         
        x = e.pageX - $(this).offset().left - ink.width()/2;
        y = e.pageY - $(this).offset().top - ink.height()/2;
         
        ink.css({top: y+'px', left: x+'px'}).addClass("animate");
      });
    }
    ripples_effect();

    function modals() {
      $('.btn-modal').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,          
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
      });
    }
    modals();

    function responsive_table() {
      $('table').wrap('<div class="responsive-table" />');      
    }
    responsive_table();

    $('.user-locate-panel ul a').on('click', function(){
      var $value = $(this).text();
      $('.user-actions .locate .label span').text($value);
      $.magnificPopup.close();
    });


    $('.input-label input').on('focus', function(){
      $(this).parent().addClass('focus-in');
    });
    $('.input-label input').on('blur', function(){
      var $this = $(this);
      if ( !$this.val() == '' ) {
        $this.parent().addClass('focus-in');        
      } else {
        $this.parent().removeClass('focus-in');        
      }
    });


    $('.pay-variants .header a').on('click', function(){
      var $this = $(this);
      if ( $this.hasClass('is-active') ) {
        $this.removeClass('is-active');
        $this.parent().next().fadeOut();
      } else {
        $this.parent().next().fadeIn();
        $this.addClass('is-active');
      }
    });

    $(document).mouseup(function(e) {
      var container = $('.pay-variants .body, .pay-variants .header a.is-active');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.pay-variants .body').fadeOut();
        $('.pay-variants .header a').removeClass('is-active');
      }
    });

    $('.pay-variants .body a').on('click', function(){
      var image_src = $(this).find('img').attr('src');
      $('.pay-variants .columns').fadeOut('50', function(){
        $('.pay-variants-selected').prepend('<img src="'+image_src+'"">');
        $('.pay-variants').addClass('selected');
      });
    });

    //=include modules.js
});