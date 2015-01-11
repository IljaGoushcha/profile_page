jQuery(document).ready(function() {


  $(window).on('resize', function() {
    console.log("width:" + $(window).width());
    console.log("height:" + $(window).height());
    console.log("aspect:" + $(window).width()/$(window).height());
    // $('body').css('background-size', '100%');
    $('body').css('.bodyx');
    if ($(window).width < 500) {

      $(this).addClass("bodyx");
    }
  });

});

// 2880 by 1920 aspect 1.5
