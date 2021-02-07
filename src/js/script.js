// NAVBAR SCROLLING FOR DESKTOP
$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('.navbar').addClass('navbar-white');
            $('#nav-left').removeClass('ml-header');
            $('#nav-right').removeClass('mr-header');
        } else {
            $('.navbar').removeClass('navbar-white');
            $('#nav-left').addClass('ml-header');
            $('#nav-right').addClass('mr-header');
        }
    });
});

$(function () {
    $(window).on('scroll', function () {
        if($(window).scrollTop() >= $('#section-about').offset().top) {
            $('.navbar').addClass('nav-padding');
            $('.sidebar-bottom').addClass('sidebar-bottom-slide');
        } else {
            $('.navbar').removeClass('nav-padding');
            $('.sidebar-bottom').removeClass('sidebar-bottom-slide');
        }
    });
});

// BURGER-TOGGLER WHITE BACKGROUND
$('#nav-toggle-button').click(function(){
    $(".navbar").toggleClass("navbar-white-mobile");
    $(".navbar-toggler").toggleClass("navbar-toggler-active");
  });

// IZOTOPE
$('.grid').isotope({
    itemSelector: '.grid-item',
});


$('.filter-button-group').on('click', '.filter-item', function () {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({ filter: filterValue });
    $('.filter-button-group .filter-item').removeClass('active');
    $(this).addClass('active');
});

// DROPDOWN MENU FOR MOBILE VERSION
$('.dropdown-menu a').click(function () {           
    $('.button-dropdown').text($(this).text());
  });

  $('li.menu-link').click(function(){
    $('li.menu-link').removeClass("menu-link-active");
    $(this).addClass("menu-link-active");
});