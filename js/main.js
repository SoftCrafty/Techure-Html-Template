(function ($){
    "use strict";
    $(document).ready(function () {

  /*==== SlideBar =====*/
  /*=========barBtn==========*/ 
    var barBtn = $('.bar-btn');
     barBtn.on('click', function() {
      $('.off-canvas').toggleClass('active')
     });
  
  /*========= menuCloseBtn ==========*/ 
  var barBtn = $('.off-canvas-close, .body-overlay');
  barBtn.on('click', function() {
   $('.off-canvas').removeClass('active')
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
        var bootstrapTooltip = $('[data-bs-toggle="tooltip"]');
        if (bootstrapTooltip.length) {
            bootstrapTooltip.tooltip();
        }


        $('.tech-service-carousel').owlCarousel({
       
          loop: true,
         autoplay:true,
         dots:false,	
        autoplayTimeout:1000,
        autoPlaySpeed: 1000,
        autoplayHoverPause:true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          

          1199:{
            items: 2,

          },
          1200:{
            items: 2,

          },
          1300:{
            items: 2,

          },
          1400: {
            items: 2,
          },
          1920:{
            items:3,
          }
        },
      })
/*==== Testimonal carousel =====*/
$(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay:false,
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






        });
  })(jQuery);
  