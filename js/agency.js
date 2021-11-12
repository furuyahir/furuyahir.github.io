(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  ////////////////////// Added by me for iframes

  // The code will keep loading the url into iframe until the doc loads successfully.

    var URL = "https://docs.google.com/viewer?srcid=1dd3x5pxIRdAJuSJrTsdUzbROFiPky61E&pid=explorer&efh=false&a=v&chrome=false&embedded=true";
    var count = 0;
        var iframe = ` <iframe id = "myIframe" src = "${URL}" width="100%" height="300px" frameborder = "0"></iframe>`;
            
       $(`#iframeContainer`).html(iframe);
            $('#myIframe').on('load', function(){ 
            count++;
            if(count>0){
                clearInterval(ref)
            }
        });

        var ref = setInterval(()=>{
        $(`#iframeContainer`).html(iframe);
        $('#myIframe').on('load', function() {
            count++;
            if (count > 0) {
                clearInterval(ref)
            }
        });
    }, 6000)

    // The code will keep loading the url into iframe until the doc loads successfully.
    
    var URL2 = "https://docs.google.com/viewer?srcid=1Ju0AcEaJ_OM3kOw-nl0DdF-wS8M2pLqu&pid=explorer&efh=false&a=v&chrome=false&embedded=true";
    var count2 = 0;
        var iframe2 = ` <iframe id = "myIframe2" src = "${URL2}" width="100%" height="1010px" frameborder = "0"></iframe>`;
            
       $(`#iframeContainer2`).html(iframe2);
            $('#myIframe2').on('load', function(){ 
            count2++;
            if(count2>0){
                clearInterval(ref2)
            }
        });

        var ref2 = setInterval(()=>{
        $(`#iframeContainer2`).html(iframe2);
        $('#myIframe2').on('load', function() {
            count2++;
            if (count2 > 0) {
                clearInterval(ref2)
            }
        });
    }, 6000)
})(jQuery); // End of use strict
