(function ($){
    "use strict";
    $(document).ready(function () {

  /*==== SlideBar =====*/
  /*=========Btn==========*/
    var barBtn = $('.bar-btn');
     barBtn.on('click', function() {
      $('.off-canvas-contact').toggleClass('active')
     });
  /*========= menu-bar-Btn ==========*/
  var menuBarBtn = $('.main-menu-bar-btn');
  menuBarBtn.on('click', function() {
   $('.off-canvas').toggleClass('active')
  });
  /*========= CloseBtn ==========*/
  var barBtn = $('.off-canvas-close, .body-overlay');
  barBtn.on('click', function() {
   $('.off-canvas-contact').removeClass('active')
  });

  var menubarCloseBtn = $('.off-canvas-close, .body-overlay');
  menubarCloseBtn.on('click', function() {
   $('.off-canvas').removeClass('active')
  });
  /*=====  Search bar ======*/
  var searchBar =$(".search-icon-box");
  searchBar.on("click", function () {
    $('.search-box').toggleClass('active');
  })
  /*=====  Navbar Fixed ======*/
        var $window = $(window);
        $window.on('scroll', function() {
          //header fixed animation and control
          if($window.scrollTop() > 0) {
              $(".header-area").addClass('header-fixed');
          }else{
              $(".header-area").removeClass('header-fixed');
          }

      });
  /*=========== Sub menu ============*/
      var dropdowmMenu = $('.off-canvas-menu .off-canvas-dropdown');
      dropdowmMenu.parent('li').children('.item').append(function() {
      return `<button class="off-canvas-dropdown-toggle icon-element icon-element-xs" type="button"><i class="fa-solid fa-sort-down upbtn"></i></button>`;
      });

  /*=========== sub menu ============*/
     var dropMenuToggler = $('.off-canvas-dropdown-toggle');

      dropMenuToggler.on('click', function() {
          var Self = $(this);
          Self.toggleClass('active');
          Self.parent().parent().siblings().children(".item").find(".off-canvas-dropdown-toggle").removeClass("active");
          Self.parent().parent().children('.off-canvas-dropdown').slideToggle();
          Self.parent().parent().siblings().children('.off-canvas-dropdown').slideUp();
          return false;
      });

      /*==== Video Play =====*/
      var playBtn = $('.play-btn');
      var modalClose = $('.btn-close, .modal');


      playBtn.on('click', function(){
      var mediaVideo = $("#player").get(0);
          mediaVideo.play();
      });

      modalClose.on('click', function(){
      var mediaVideo = $("#player").get(0);

      mediaVideo.pause();

      });
/*==== Counter =====*/
var numberCounter = $('.counter');
if (numberCounter.length) {
    numberCounter.counterUp({
        delay: 20,
        time: 2000
    });
}
  /*==== Bootstrap tooltip =====*/
        var bootstrapTooltip = $('.them-btn [data-bs-toggle="tooltip"]');
        if (bootstrapTooltip.length) {
            bootstrapTooltip.tooltip();
        }
  /*==== tech-service-carousel =====*/



/*==== Testimonal carousel =====*/
$(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay:true,
    autoplayTimeout:6000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
        loop: false,
      },

    },
  });

/*==== Our Teams Carousel =====*/
var cardCarousel = $('.our-teams-carousel');
if (cardCarousel.length) {
    cardCarousel.owlCarousel({
        loop: true,
        items: 3,
        nav: false,
        dots: true,
        smartSpeed: 700,
        margin: 30,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 767 up
            767 : {
                items: 2
            },
            // breakpoint from 992 up
            992 : {
                items: 3
            },

        }
    });
}



/*==== slider-carouser-three carousel =====*/
$(".slider-carousel-three").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  autoplay:true,
  autoplayTimeout:6000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
      loop: false,
    },

  },
});

/*==== slider-carouser-four carousel =====*/

$(".slider-carousel-four").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  autoplay:true,
  autoplayTimeout:5000,
  responsiveClass: true,

  navText: [
    ` Prev`,
  `Next `,
],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
      loop: true,
    },

  },
});
/*==== slider-carouser-five carousel =====*/

$(".slider-carousel-five").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  autoplay:true,
  autoplayTimeout:6000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
      loop: true,
    },

  },
});

/*==== slider-carouser-six carousel =====*/

$(".slider-carousel-six").owlCarousel({
  loop: false,
  margin: 20,
  items:1,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 6000,
  responsiveClass: true,
  navText: [
    `<i class="fa-solid fa-arrow-left"></i>`,
  `<i class="fa-solid fa-arrow-right"></i>`,
],
});
/*==== slider-carouser-seven carousel =====*/

$(".slider-carousel-seven").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  autoplay:false,
  autoplayTimeout:6000,
  responsiveClass: true,
  navText: [
    `<i class="fa-solid fa-arrow-left"></i> <p>Previous</p>`,
  `<p>Next</p> <i class="fa-solid fa-arrow-right"></i> `,
],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
      loop: true,
    },

  },
});

$(".slider-carousel-seves").owlCarousel({
  loop: false,
items:1,
  margin: 0,
  nav: true,
  dots: false,
  autoplay: false,
  autoplayTimeout: 6000,
  responsiveClass: true,
  navText: [
    `<i class="fa-solid fa-arrow-left"></i>`,
  `<i class="fa-solid fa-arrow-right"></i>`,
],


});
/*==== Hover Active =====*/
$(".service-card").hover(function() {
  $('.service-card').removeClass('item-active');
  $(this).addClass('item-active');
});


  new WOW().init();
 $('select').niceSelect();
  });
  })(jQuery);

