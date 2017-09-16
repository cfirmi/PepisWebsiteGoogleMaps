
$(document).ready(function() {
    $('.fa-bars').click(function() {
      $('.sidebar-nav-closed').toggleClass('sidebar-nav-opened')
      $('.close-rect-hidden').toggleClass('close-rect-showing')
    });
    $('.close-rect-hidden').click(function() {
      $('.sidebar-nav-closed').toggleClass('sidebar-nav-opened')
      $('.close-rect-hidden').toggleClass('close-rect-showing')
    });
    $('.fa-bars').click(function() {
      $('.pepisLogo').toggleClass('pepisLogo-nav')
    });
    $('.close-rect-hidden').click(function() {
      $('.pepisLogo').toggleClass('pepisLogo-nav')
     });
     
  // Open Map
    $('.location').click(function() {
     $('.fa-map-marker').toggleClass('addingred')
     $('.closedLocation').toggleClass('openedLocation')
     $('.openedLocation').toggleClass('closedLocation')
     initMap();
    });

  // Close Map
    $('.fa-times').click(function() {
      $('.fa-map-marker').toggleClass('addingred')
      $('.openedLocation').toggleClass('closedLocation')
    });

    $(window).scroll(function() {
      stickyNav();
    });
    var stickyNavTop = $('.secondNav').offset().top;
    
      var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
    
        if (scrollTop > stickyNavTop) { 
          $('.secondNav').addClass('sticky');
        } else {
          $('.secondNav').removeClass('sticky'); 
        }
      };
      stickyNav();

      var stickyNavTop2 = $('.thirdnav').offset().top;
      
        var stickyNav2 = function(){
          var scrollTop = $(window).scrollTop();
      
          if (scrollTop > stickyNavTop2) { 
            $('.thirdnav').addClass('sticky2');
          } else {
            $('.thirdnav').removeClass('sticky2'); 
          }
        };
        stickyNav2();
  
        $(window).scroll(function() {
          stickyNav2();
        });


})