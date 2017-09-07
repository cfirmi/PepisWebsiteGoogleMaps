
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
     $('.location').click(function() {
        $('.closedLocation').toggleClass('openedLocation')
        $('.openedLocation').toggleClass('closedLocation')
        initMap();
    });

})