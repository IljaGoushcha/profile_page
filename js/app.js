function adjustImageSize() {
  var width = $(window).width();
  var height = $(window).height();
  var aspect = width/height;
  var widthExtended = (height)*(2880/1920);
  if (aspect >= 1.5) {
    $('body').css({'background-size': width});
  } else {
    $('body').css({'background-size': widthExtended});
  }
};

jQuery(document).ready(function() {

  adjustImageSize();
  $(window).on('resize', adjustImageSize);

});

// 2880 by 1920 aspect 1.5


