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
        });
  })(jQuery);
  