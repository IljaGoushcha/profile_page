var menuOpen = false

function adjustFontSize() {
  var width = $(window).width();
  var height = $(window).height();
  if (height < 500 || width < 500) {
    console.log("small screen");
    $('#menu p').hide();
    $('.hamburger-icon').css({
      'margin-left': '100px'
    });
    $('#menu').css({
      'right': '10px',
      'top': '5px'
    });

    $('#page1 h1, #page1 h2').css({
      'font-size': '30px',
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
    $('#menu p').show();
    $('.hamburger-icon').css({
      'margin-left': '0'
    });
    $('#menu').css({
      'right': '50px',
      'top': '20px'
    });

    $('#page1 h1, #page1 h2').css({
      'font-size': '60px',
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

function hideOptions() {
  $('.menu-items').hide();
  $('#option1').hide();
  $('#option2').hide();
  $('#option3').hide();
};

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

function openMenu() {
  console.log("open");
  setTimeout(function () {$('#option1').show(500)}, 100);
  setTimeout(function () {$('#option2').show(500)}, 200);
  setTimeout(function () {$('#option3').show(500)}, 300);
};

function hideMenu() {
  console.log("hide");
  setTimeout(function () {$('#option1').hide(500)}, 300);
  setTimeout(function () {$('#option2').hide(500)}, 200);
  setTimeout(function () {$('#option3').hide(500)}, 100);
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
  $('.menu-icon').on('mouseenter', openMenu);
  $('#menu').on('mouseleave', hideMenu);
});

// 2880 by 1920 aspect 1.5


