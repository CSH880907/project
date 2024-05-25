
$(document).ready(function () {
  $('.btn').on('click','button',function (event) { 
    event.preventDefault();
    alert('加入完成');
  });
  $('.go').html('<i class="bi bi-cart-plus-fill"></i> 加入購物車');
});


$(document).ready(function () {
  $('.t1').on('click','button',function (event) { 
    event.preventDefault();
    alert('收藏成功');
  });
  $('.yes').html('<i class="bi bi-plus"></i> 加入收藏');
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
  $('.mobile-link').click(function (e) { 
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