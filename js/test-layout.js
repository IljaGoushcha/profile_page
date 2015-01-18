function adjustImageSize() {
  var width = $(window).width();
  var height = $(window).height();
  var aspect = width/height;
  var widthExtended = (height)*(2880/1920);
  if (aspect >= 1.5) {
    console.log(">1.5");
    $('.page').css({
      'background-size': width,
      'width': width,
      'height': height
    });
  } else {
    console.log("<1.5");
    $('.page').css({
      'background-size': widthExtended,
      'width': width,
      'height': height
    });
  }
};

jQuery(document).ready(function() {

  adjustImageSize();

  $(window).on('resize', adjustImageSize);
  $('#menu-icon').on('click', toggleMenu);

});

// 2880 by 1920 aspect 1.5
