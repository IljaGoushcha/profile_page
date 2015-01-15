var menuOpen = false

function adjustFontSize() {
  var width = $(window).width();
  var height = $(window).height();
  if (height < 500 || width < 500) {
    console.log("small screen");
    $('#menu h1').hide();
    $('#menu').css({'left': width-50});
    $('.page1 h1, .page1 h2').css({
      'text-align': 'center',
      'font-size': '30px',
      'color': '#336680',
      'font-family': '"Helvetica Neue"',
      'font-weight': 'lighter'
    });
    $('.background1').css({
      'margin': '0 auto 0 auto',
      'width': '200px',
      'height': '35px',
      'background-color': 'rgba(255, 255, 255, 0.7)'
    });
    $('.background2').css({
      'margin': '0 auto 0 auto',
      'width': '300px',
      'height': '35px',
      'background-color': 'rgba(255, 255, 255, 0.7)'
    });
  } else {
    console.log("large screen");
    $('#menu h1').show();
    $('#menu').css({'left': width-180});
    $('.page1 h1, .page1 h2').css({
      'text-align': 'center',
      'font-size': '60px',
      'color': '#336680',
      'font-family': '"Helvetica Neue"',
      'font-weight': 'lighter'
    });
    $('.background1').css({
      'margin': '0 auto 0 auto',
      'width': '400px',
      'height': '70px',
      'background-color': 'rgba(255, 255, 255, 0.7)'
    });
    $('.background2').css({
      'margin': '0 auto 0 auto',
      'width': '500px',
      'height': '70px',
      'background-color': 'rgba(255, 255, 255, 0.7)'
    });
  }
}

function adjustImageSize() {
  var width = $(window).width();
  var height = $(window).height();
  var aspect = width/height;
  var widthExtended = (height)*(2880/1920);

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

function hideMenu() {
  $('#menu-items').hide();
}

function toggleMenu() {
  if (menuOpen == true) {
    $('#menu-items').hide();
    menuOpen = false;
  } else {
    $('#menu-items').show();
    menuOpen = true;
  }
};

jQuery(document).ready(function() {
  hideMenu();
  adjustImageSize();
  adjustFontSize();
  $(window).on('resize', adjustImageSize);
  $(window).on('resize', adjustFontSize);
  $('#menu-icon').on('click', toggleMenu)

});

// 2880 by 1920 aspect 1.5


