$(function() {
    $('a[href="#"]').click(function(e){ e.preventDefault(); });

    /*! http://johnpolacek.github.io/imagefill.js/ */
    // $('.item').imagefill();

    /*! http://www.jacklmoore.com/autosize/ */
    autosize($('textarea'));


    /*! https://select2.github.io/ */
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

      $(window).resize(function() { 
        didResize = true;
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

    //=include modules.js
});