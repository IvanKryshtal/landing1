 /*---timer---*/
document.addEventListener("DOMContentLoaded", function (event) {
    var fullTime = new Date().getTime() + 54000000; 
    $('.countdown-container').countdown(fullTime, function (event) {
        $(this).html(event.strftime(
        		'<span class="time hours time_hours">%H</span>'
            +'<span class="time minutes time_minutes">%M</span>'
            +'<span class="time seconds time_seconds">%S</span>'));
    })}); 

 /*---slowscroll--*/

$(document).ready(function(){
  $('a[href^="#"]').click(function(){
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if($.browser){
      $('body').animate( { scrollTop: destination }, 700 );
    } else{
        $('html').animate( {scrollTop: destination}, 700 );
    }
    return false;
  });
});

/*---slider---*/

$(document).ready(function() {


  $('.bxslider').bxSlider({
  nextSelector: '#slider-next',
  prevSelector: '#slider-prev',
  nextText: '<img src="./img/arrow-right.png" alt="" >',
  prevText: '<img src="./img/arrow-left.png" alt="" >',
  ariaLive: true,
  ariaHidden: true,
  slideWidth: 520,  
  slideMargin: 10,
  useCSS: true,
  pager: false
  });

  

});