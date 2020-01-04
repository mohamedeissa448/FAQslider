var action='click';
var slideSpeed=1000;
$(document).ready(function(){
  $('li.q').on(action,function(){
    $(this).next().slideToggle(slideSpeed).siblings('li.a').slideUp(500);
    var image=$(this).children('img');
    $('img').not(image).removeClass('rotate');
    image.toggleClass('rotate')
  });
});
