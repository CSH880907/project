const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 4000,
  loop: true,
  autoplay: {
  delay:2000,
  },
  effect:'slide',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


$(document).ready(function () {
  $('.eag a').click(function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop:0
    },800);
  });
});

$(document).ready(function () {
  $('.mobile-link').click(function (even) {
      $('body').toggleClass('open');         
  });
});

$(document).ready(function () {
  $('.mobile-close').click(function (e) { 
      $('body').removeClass('open');   
  });
});

$(document).ready(function () {
  $('.XXX > li h2 ').click(function (e) { 
    e.preventDefault();
    $(this).parent().siblings().find('ul').slideUp();
    $(this).parent().find('ul').slideToggle();
  });
});
