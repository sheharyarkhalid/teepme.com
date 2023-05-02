
    $(document).ready(function() {  

        $('.mobile_res_toggle_btn').click(function () {
            $('.mobile_res_toggle_content').toggleClass('responsive_bar');
        });
        

        }); 
      
        $(document).ready(function () {
            $(".insta_custom_section_slide").slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 1400,
              dots: false,
              arrows: false,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1400,
                    dots: false,
                    arrows: false,
                  },
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1400,
                         dots: false,
                         arrows: false,
                  },
                },
                {
                  breakpoint: 540,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1400,
                        dots: false,
                        arrows: false,
                  },
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1400,
                         dots: false,
                         arrows: false,
                  },
                },
              ],
            });
          });