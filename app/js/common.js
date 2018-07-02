$(function() {

//----------------------------якорь---------------------------------------------
$(".nav ul").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 110}, 'slow', 'swing');

//--------------------закриття меню при кліку на ссилку якоря--------------------
$('.hamburger').removeClass('hamburger-active');
   $('.nav').removeClass('nav-active');
   $('.header').removeClass('header-menu');
});

//------------------------------гамбургер-----------------------------
$('.hamburger').click(function() {
  $(this).toggleClass('hamburger-active');
  $('nav').toggleClass('nav-active');
  $('header').toggleClass('header-menu');
});

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});

//------------------------------------form-------------------------------------------
	$('input[type="tel"]').mask('+0 (000) 000-00-00');

	jQuery.validator.addMethod("phoneno", function(phone_number, element) {
	   return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
	}, "Введите Ваш телефон");

  $(".organize-form").validate({
    messages: {
      name: "Введите ваше Имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".organize-form").find("input[name=name]").val(),
        phone: jQuery(".organize-form").find("input[name=phone]").val(),
        subject: jQuery(".organize-form").find("input[name=subject]").val()
      };
      ajaxSend('.organize-form', t);
    }
  });

  $(".bell-form").validate({
    messages: {
      name: "Введите ваше Имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".bell-form").find("input[name=name]").val(),
        phone: jQuery(".bell-form").find("input[name=phone]").val(),
        subject: jQuery(".bell-form").find("input[name=subject]").val()
      };
      ajaxSend('.bell-form', t);
    }
  });

  $(".more-form").validate({
    messages: {
      name: "Введите ваше Имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".more-form").find("input[name=name]").val(),
        phone: jQuery(".more-form").find("input[name=phone]").val(),
        subject: jQuery(".more-form").find("input[name=subject]").val()
      };
      ajaxSend('.more-form', t);
    }
  });

  $(".order-form").validate({
    messages: {
      name: "Введите ваше Имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".order-form").find("input[name=name]").val(),
        subject: jQuery(".order-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-form', t);
    }
  });

  $(".calculate-form").validate({
    messages: {
      name: "Введите ваше Имя",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".calculate-form").find("input[name=name]").val(),
        subject: jQuery(".calculate-form").find("input[name=subject]").val()
      };
      ajaxSend('.order-form', t);
    }
  });

  $("button").on("click", function(){
    setTimeout(function() {
      $('.form label').hide();
    }, 3000);
  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>20){
          $('.header').addClass('header-active');
      }
      else if ($(this).scrollTop()<20){
          $('.header').removeClass('header-active');
      }
  });

});



//----------------------------------------preloader----------------------------------

$(window).on('load', function(){
  $('.preloader').delay(1000).fadeOut('slow');
});

$(window).scroll(function() {

  var parallax = $(this).scrollTop();

  $('.about__square').css({
    'bottom' : parallax/10 + 'px'
  });

  $('.about__parallax').css({
    'top' : parallax/5 + 'px'
  });

  $('.principles__square').css({
    'bottom' : '-' + parallax/20 + 'px'
  });

  $('.principles__parallax').css({
    'top' : parallax/25 + 'px'
  });

  $('.arrange__parallax-one').css({
    'bottom' : parallax/40 + 'px'
  });  

  $('.arrange__parallax-two').css({
    'top' : parallax/30 + 'px'
  });

  $('.events__parallax').css({
    'top' : parallax/30 + 'px'
  });

  $('.events__square').css({
    'top' : parallax/10 + 'px'
  });

  $('.value__parallax-one').css({
    'top' : parallax/35 + 'px'
  });

  $('.plan__parallax-one').css({
    'bottom' : parallax/30 + 'px'
  });

  $('.plan__parallax-two').css({
    'top' : parallax/25 + 'px'
  });
});

//--------------------------------------svg-icon--------------------------------------
;( function( window, document )
{
  'use strict';

  var file     = 'img/symbols.html',
      revision = 1.0;

  if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
      return true;

  var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
      request,
      data,
      insertIT = function()
      {
          document.body.insertAdjacentHTML( 'afterbegin', data );
      },
      insert = function()
      {
          if( document.body ) insertIT();
          else document.addEventListener( 'DOMContentLoaded', insertIT );
      };

  if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
  {
    data = localStorage.getItem( 'inlineSVGdata' );
    if( data )
    {
        insert();
        return true;
    }
  }

  try
  {
    request = new XMLHttpRequest();
    request.open( 'GET', file, true );
    request.onload = function()
      {
        if( request.status >= 200 && request.status < 400 )
          {
            data = request.responseText;
            insert();
            if( isLocalStorage )
            {
              localStorage.setItem( 'inlineSVGdata',  data );
              localStorage.setItem( 'inlineSVGrev',   revision );
            }
        }
    }
    request.send();
  }
  catch( e ){}

}( window, document ) );

