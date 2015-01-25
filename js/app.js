var menuOpen = false

function adjustFontSize() {
  var width = $(window).width();
  var height = $(window).height();
  if (height < 500 || width < 500) {
    console.log("small screen");
    // $('#menu h1').hide();
    // $('#menu').css({'left': width-50});
    $('.menu-items').css({'lmargine-right': '50px'});
    $('#page1 h1, #page1 h2').css({
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
    $('#skills-list p').css({
      'font-size': '15px'
    });
  } else {
    console.log("large screen");
    // $('#menu h1').show();
    // $('#menu').css({'left': width-180});
    $('#page1 h1, #page1 h2').css({
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
    $('#skills-list p').css({
      'font-size': '20px'
    });
  }
}

function adjustImageSize() {
  var width = $(window).width();
  var height = $(window).height();
  var aspect = width/height;
  var widthExtended = (height)*(2880/1920);

  $('.carousel-inner').css({
    'width': width,
    'height': height
  });
  $('.carousel-caption p, .carousel-caption li').css({
    'margin-left': width/3
  });
  $('.carousel-caption h3').css({
    'margin-left': width/3
  });
  if (width < 600) {
    $('.carousel-caption h3:first').css({
      'margin-left': width/10
    });
    $('.item img').css({
      'margin-top': height * 0.5,
      'width': width * 0.5
    });
  } else {
    $('.item img').css({
      'margin-top': (height - width * 0.5) * 0.6,
      'width': width * 0.5
    });
  }
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

function hideMenu() {
  $('.menu-items').hide();
}

function toggleMenu() {
  console.log("hi");
  if (menuOpen == true) {
    $('.menu-items').hide();
    menuOpen = false;
  } else {
    $('.menu-items').show();
    menuOpen = true;
  }
};

function moveTitles() {
  var height = $(window).height();
  var width = $(window).width();
  var margin1 = (height * 2) - (($(document).scrollTop()));
  var margin2 = (height * 3) - (($(document).scrollTop()));
  if (margin1 > 0 && margin1 < (width-200)) {
    $('#skills').css({
      'margin-left': margin1
    });
  }
  if (margin2 > 0 && margin2 < (width-200)) {
    $('#contact').css({
      'margin-left': margin2
    });
  }
};

jQuery(document).ready(function() {
  hideMenu();
  adjustImageSize();
  adjustFontSize();
  moveTitles();
  $(window).on('resize', adjustImageSize);
  $(window).on('resize', adjustFontSize);
  $(window).on('scroll', moveTitles);
  $('#menu').on('mouseover', toggleMenu);

});

// 2880 by 1920 aspect 1.5


