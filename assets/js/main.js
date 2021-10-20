(function($){

    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $("#main-menu").addClass("sticky");
      } else {
        $("#main-menu").removeClass("sticky");
      }
    });



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

      // about us image slider
      $('.banner-img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:false,
        nextArrow:false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      // best selling section
      $('.best_selling_img').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:false,
        nextArrow:false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

})(jQuery);



