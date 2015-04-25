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
      'font-size': '15px',
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

function adjustArrows() {
  var height = $(window).height();
  $('#page2 img[src="images/arrow-right.png"]').css({ 'width': height*0.05 });
  $('#page2 img[src="images/arrow-left.png"]').css({ 'width': height*0.05 });
};

function openMenu() {
  console.log("open");
  setTimeout(function () {$('#option1').show(500)}, 100);
  setTimeout(function () {$('#option2').show(500)}, 200);
  setTimeout(function () {$('#option3').show(500)}, 300);
};

function hideMenu() {
  console.log("hide");
  setTimeout(function () {$('#option1').hide(500)}, 600);
  setTimeout(function () {$('#option2').hide(500)}, 500);
  setTimeout(function () {$('#option3').hide(500)}, 400);
};

function nextSlide() {
  var currentSlideId = $("#page2").find(".slide-on").attr("id");
  var currentId = parseInt(currentSlideId.replace("my-slide", ""));
  if ( currentId == 4) {
    var nextSlideId = "my-slide1";
  } else {
    var nextId = currentId + 1;
    var nextSlideId = "my-slide" + nextId;
  }
  console.log("current slide id: " + currentSlideId);
  console.log("next slide id: " + nextSlideId);
  $('#' + currentSlideId).removeClass("slide-on");
  $('#' + currentSlideId).addClass("slide-off");
  $('#' + nextSlideId).removeClass("slide-off");
  $('#' + nextSlideId).addClass("slide-on");
};

function prevSlide() {
  var currentSlideId = $("#page2").find(".slide-on").attr("id");
  var currentId = parseInt(currentSlideId.replace("my-slide", ""));
  if ( currentId == 1) {
    var nextSlideId = "my-slide4";
  } else {
    var nextId = currentId - 1;
    var nextSlideId = "my-slide" + nextId;
  }
  console.log("current slide id: " + currentSlideId);
  console.log("next slide id: " + nextSlideId);
  $('#' + currentSlideId).removeClass("slide-on");
  $('#' + currentSlideId).addClass("slide-off");
  $('#' + nextSlideId).removeClass("slide-off");
  $('#' + nextSlideId).addClass("slide-on");
};

jQuery(document).ready(function() {
  hideMenu();
  adjustImageSize();
  adjustFontSize();
  adjustArrows();

  $(window).on('resize', adjustImageSize);
  $(window).on('resize', adjustFontSize);
  $(window).on('resize', adjustArrows);
  $('.menu-icon').on('mouseenter', openMenu);
  $('#menu').on('mouseleave', hideMenu);
  $('img[src="images/arrow-right.png"]').on('click', nextSlide);
  $('img[src="images/arrow-left.png"]').on('click', prevSlide);
});

// 2880 by 1920 aspect 1.5


