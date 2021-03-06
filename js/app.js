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
    $('#page2 p, #page2 ul').css({
      'font-size': '1.2em',
    });
    $('#page2 h3').css({
      'font-size': '1.5em',
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
    $('#page2 p, #page2 ul').css({
      'font-size': '1.5em',
    });
    $('#page2 h3').css({
      'font-size': '2em',
    });
  }
}

function adjustPage() {
  var width = $(window).width();
  var height = $(window).height();
  $('.page').css({
    'width': width,
    'height': height
  });
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
  $('#' + currentSlideId).animate({"left": "-100%"});
  setTimeout(function () {
    $('#' + currentSlideId).removeClass("slide-on");
    $('#' + currentSlideId).addClass("slide-off");
    $('#' + nextSlideId).removeClass("slide-off");
    $('#' + nextSlideId).addClass("slide-on right");
    $('#' + nextSlideId).animate({"right": "0px"});
  }, 400);
  setTimeout(function () {
    $('#' + nextSlideId).removeClass("right");
    $('#' + currentSlideId).css({"left": ""});
    $('#' + nextSlideId).css({"right": ""});
  }, 1000);
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
  $('#' + currentSlideId).animate({"right": "-100%"});
  setTimeout(function () {
    $('#' + currentSlideId).removeClass("slide-on");
    $('#' + currentSlideId).addClass("slide-off");
    $('#' + nextSlideId).removeClass("slide-off");
    $('#' + nextSlideId).addClass("slide-on left");
    $('#' + nextSlideId).animate({"left": "0px"});
  }, 400);
  setTimeout(function () {
    $('#' + nextSlideId).removeClass("left");
    $('#' + currentSlideId).css({"right": ""});
    $('#' + nextSlideId).css({"left": ""});
  }, 1000);
};

function scrollToTop() {
  $("html, body").animate({ "scrollTop": 0 }, 1000);
};

function scrollToProjects() {
  var height = $(window).height();
  $("html, body").animate({ "scrollTop": height }, 1000);
};

function scrollToSkills() {
  var height = $(window).height();
  $("html, body").animate({ "scrollTop": height*2 }, 1000);
};

function scrollToContact() {
  var height = $(window).height();
  $("html, body").animate({ "scrollTop": height*3 }, 1000);
};

function sendMail(e) {
  e.preventDefault() // prevents page from refreshing on submit
  console.log("inside sendMail()");
  $.ajax({
    url: 'https://profile-page-mailer.herokuapp.com/send_email',
    type: 'POST',
    data: {
      name: $('#inputName').val(),
      email: $('#inputEmail').val(),
      body: $('#inputMessage').val()
    },
    beforeSend: function() {
      $('#page4 button').hide();
      $('#page4 .email-sending').show(1000);
      console.log("sending e-mail");
    }
  })
  .done(function() {
    $('#page4 button').hide();
    $('#page4 .email-sent').show(1000);
    $('#page4 .email-sending').hide(1000);
    console.log("success mail");
  })
  .fail(function(error) {
    $('#page4 button').show();
    console.log("error mail: " + error.status);
  })
  .always(function() {
    console.log("complete mail");
  });
}

jQuery(document).ready(function() {
  hideMenu();
  adjustPage();
  adjustFontSize();
  adjustArrows();

  $(window).on('resize', adjustPage);
  $(window).on('resize', adjustFontSize);
  $(window).on('resize', adjustArrows);
  $('.menu-icon').on('mouseenter', openMenu);
  $('#menu').on('mouseleave', hideMenu);

  $('.menu-icon').on('click', scrollToTop);
  $('#option1').on('click', scrollToProjects);
  $('#option2').on('click', scrollToSkills);
  $('#option3').on('click', scrollToContact);

  $('img[src="images/arrow-right.png"]').on('click', nextSlide);
  $('img[src="images/arrow-left.png"]').on('click', prevSlide);
  // $('#my-submit-btn').on('click', sendMail);

  $("form").on('submit', sendMail);
});


