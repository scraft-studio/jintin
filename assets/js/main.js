(function($){

    $('.testimonialsSlider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:false,
        nextArrow:false
      });

      $('.testimonialsSlider2').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: '<button type="button" class="slick-next"><img class="img" src="assets/images/next.png" alt=""></button>',
        prevArrow: '<button type="button" class="slick-prev"><img class="img" src="assets/images/prev.png" alt=""></button>',
        
      });

     
})(jQuery);



