
// slider js
$('#post_slider').owlCarousel({
    margin:30,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    loop:true,
    smartSpeed:900,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('#tweets').owlCarousel({
    nav:false,
    dots:false,
    loop:true,
    autoplay:true,
    items:1,
    smartSpeed:900,
})

// header js
$(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
        $('.sticky').addClass('fixed');
    } else {
        $('.sticky').removeClass('fixed');
    }
});

// loader js
$(document).ready(function () {
    
    setTimeout(function(){ // allowing 3 secs to fade out loader
    $('#preloader').fadeOut('slow');
    },2000);
    
});

// scroll to top js
var btn = $('.to_top');
btn.hide();
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.fadeIn();
  } else {
    btn.fadeOut();
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});