function adjustImageSize() {
  var width = $(window).width();
  var height = $(window).height();
  var aspect = width/height;
  var widthExtended = (height)*(2880/1920);
  $('#menu').css({'left': width-180});
  if (aspect >= 1.5) {
    console.log(">1.5");
    $('.page1').css({
      'background-size': width,
      'width': width,
      'height': height
    });
    $('.page2').css({
      'background-size': width,
      'width': width,
      'height': height
    });
    $('.page3').css({
      'background-size': width,
      'width': width,
      'height': height
    });
  } else {
    console.log("<1.5");
    $('.page1').css({
      'background-size': widthExtended,
      'width': width,
      'height': height
    });
    $('.page2').css({
      'background-size': widthExtended,
      'width': width,
      'height': height
    });
    $('.page3').css({
      'background-size': widthExtended,
      'width': width,
      'height': height
    });
  }
};

jQuery(document).ready(function() {

  adjustImageSize();
  $(window).on('resize', adjustImageSize);

});

// 2880 by 1920 aspect 1.5


